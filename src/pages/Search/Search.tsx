import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import * as C from "../../allFiles";
import axios from "axios";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const [data, setData] = useState<any[]>([]);
  const [translatedData, setTranslatedData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      setLoading(true);
      setError(null);

      try {
        // Step 1: Translate Korean query to English
        const englishQuery = await translateText(query, "en", "ko");

        // Step 2: Fetch data from TheMealDB using the translated query
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${englishQuery}`
        );
        const meals = response.data.meals || [];

        // Step 3: Translate results from English to Korean
        const translatedMeals = await Promise.all(
          meals.map(async (meal: any) => {
            const translatedName = await translateText(
              meal.strMeal,
              "ko",
              "en"
            );
            const translatedInstructions = await translateText(
              meal.strInstructions,
              "ko",
              "en"
            );
            return {
              ...meal,
              strMeal: translatedName,
              strInstructions: translatedInstructions,
            };
          })
        );

        setData(meals);
        setTranslatedData(translatedMeals);
      } catch (err) {
        setError("데이터를 가져오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const translateText = async (
    text: string,
    target: string,
    source: string
  ) => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_API_KEY}`,
        {
          q: text,
          target,
          source,
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (err) {
      console.error("번역 실패:", err);
      return text;
    }
  };

  return (
    <>
      <C.Header />
      <S.FirstSection>
        <S.InnerBox>
          {loading && (
            <PulseLoader
              size={10}
              margin={3}
              color="#FFA100"
              style={{ marginTop: "40px" }}
            />
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <S.FlexBoxOne>
            {!loading && !error && data.length >= 0 && (
              <h1>&quot;{query}&quot;</h1>
            )}
            {!loading && !error && data.length >= 0 && (
              <p>검색결과 {data.length}건</p>
            )}
          </S.FlexBoxOne>
          {!loading && !error && data.length === 0 && (
            <h5>검색결과가 없어요.</h5>
          )}
          {!loading && !error && translatedData.length > 0 && (
            <S.ResultCont>
              {translatedData.map((meal) => (
                <div
                  key={meal.idMeal}
                  onClick={() => navigate(`/meal-detail?id=${meal.idMeal}`)}
                >
                  <img src={meal.strMealThumb} alt={meal.strMeal} width={150} />
                  <h2>{meal.strMeal}</h2>
                </div>
              ))}
            </S.ResultCont>
          )}
        </S.InnerBox>
      </S.FirstSection>
    </>
  );
};

export default Search;
