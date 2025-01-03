import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "../../allFiles";
import * as S from "./style";
import { PulseLoader } from "react-spinners";

// 타입 정의
type Meal = {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredients: string[];
  strCategory: string;
  strArea: string;
  strYoutube: string;
};

const MealDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mealId = searchParams.get("id"); // URL에서 id 파라미터를 가져옵니다

  const [mealData, setMealData] = useState<Meal | null>(null);
  const [translatedData, setTranslatedData] = useState<Meal | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 번역 함수
  const translateText = async (text: string, target: string) => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.REACT_APP_API_KEY}`,
        {
          q: text,
          target,
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (err) {
      console.error("번역 실패:", err);
      return text; // 번역 실패 시 원본 텍스트 그대로 반환
    }
  };

  // 식사 정보 가져오기
  useEffect(() => {
    const fetchMealDetails = async () => {
      if (!mealId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const meal = response.data.meals[0];
        console.log(meal.strYoutube);

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient) {
            ingredients.push(`${ingredient} (${measure})`);
          }
        }

        const translatedTitle = await translateText(meal.strMeal, "ko");

        const translatedIngredients = await Promise.all(
          ingredients.map(
            async (ingredient) => await translateText(ingredient, "ko")
          )
        );
        const translatedInstructions = await translateText(
          meal.strInstructions,
          "ko"
        );

        setMealData({
          strMeal: translatedTitle,
          strMealThumb: meal.strMealThumb,
          strInstructions: meal.strInstructions,
          strIngredients: ingredients,
          strCategory: meal.strCategory,
          strArea: meal.strArea,
          strYoutube: meal.strYoutube.split("v=")[1].split("&")[0],
        });
        console.log(mealData?.strYoutube);

        setTranslatedData({
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strInstructions: translatedInstructions,
          strIngredients: translatedIngredients,
          strCategory: meal.strCategory,
          strArea: meal.strArea,
          strYoutube: meal.strYoutube.split("v=")[1].split("&")[0],
        });
      } catch (err) {
        setError("식사 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (loading) {
    return (
      <S.ErrorText>
        <PulseLoader
          size={12}
          margin={4}
          color="#FFA100"
          style={{ margin: "0 auto", marginTop: "200px", width: "100%" }}
        />
      </S.ErrorText>
    );
  }

  if (error) {
    return (
      <S.ErrorText>
        <h1>410</h1>
        <h3>{error}</h3>
      </S.ErrorText>
    );
  }

  return (
    <>
      <C.Header />
      <S.Container>
        {mealData ? (
          <>
            <S.TitleBox>
              <S.MealTitle>{translatedData?.strMeal}</S.MealTitle>
              <S.CategoryArea>
                <S.CategoryText>
                  분류: {translatedData?.strCategory}
                </S.CategoryText>
                <S.AreaText>국가: {translatedData?.strArea}</S.AreaText>
              </S.CategoryArea>
              <S.MealImage
                src={translatedData?.strMealThumb}
                alt={translatedData?.strMeal}
                loading="lazy"
              />
            </S.TitleBox>
            <iframe
              src={`https://www.youtube.com/embed/${mealData.strYoutube}`}
              width={420}
              height={300}
            />
            <S.IngredientsList>
              <h3>재료</h3>
              <ul>
                {translatedData?.strIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </S.IngredientsList>
          </>
        ) : (
          <div></div>
        )}
      </S.Container>
      <S.ContainerTwo>
        <S.Instructions>
          <h3>조리법</h3>
          <p>{translatedData?.strInstructions}</p>
        </S.Instructions>
      </S.ContainerTwo>
    </>
  );
};

export default MealDetail;
