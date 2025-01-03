import * as S from "./style";
import logo from "../../assets/ojc-logo.png";
import searchicon from "../../assets/icon-search.png";
import shuppleicon from "../../assets/icon-shuffle.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search?query=${encodeURIComponent(keyword)}`);
    }
  };

  const handleShuffle = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const randomMealId = data.meals[0].idMeal;

      navigate(`/meal-detail?id=${randomMealId}`);
    } catch (err) {
      console.error("랜덤 음식을 가져오는 데 실패했습니다.", err);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.HeadCont>
      <S.InnerBox>
        <Link to={"/"}>
          <S.HeadLogo src={logo} alt="" loading="lazy" />
        </Link>
        <S.InputCont>
          <S.InputBox>
            <S.HeadInput
              type="text"
              placeholder="음식, 요리 검색"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <S.HeadBtn onClick={handleSearch}>
              <img src={searchicon} alt="" width={"16px"} loading="lazy" />
            </S.HeadBtn>
          </S.InputBox>
          <S.HeadBtn onClick={handleShuffle}>
            <img src={shuppleicon} alt="" width={"16px"} loading="lazy" />
          </S.HeadBtn>
        </S.InputCont>

        <div></div>
      </S.InnerBox>
    </S.HeadCont>
  );
};
export default Header;
