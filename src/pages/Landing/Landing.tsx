import * as S from "./style";
import * as C from "../../allFiles";
import bagel from "../../assets/bagel.png";
import card1 from "../../assets/Card1.png";
import card2 from "../../assets/Card2.png";
import card3 from "../../assets/Card3.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <C.Header />
      <S.Banner>
        <S.InnerBox>
          <S.LeftCont>
            <h1>오늘 점심 뭐 먹지?</h1>
            <p>
              오늘은 또 무엇을 먹을지 고민하는 당신을 위해! <br />
              당신의 취향과 선호를 저격하는 맛있는 메뉴를 랜덤으로 추천해
              드립니다.
            </p>

            <nav>
              <Link to={"/location"}>
                <S.LandBtn>추천 받기</S.LandBtn>
              </Link>
              {/* <S.LandBtn>찾아보기</S.LandBtn> */}
            </nav>
          </S.LeftCont>
          <S.RightCont>
            <S.Food src={bagel} alt="" loading="lazy" />
          </S.RightCont>
        </S.InnerBox>
      </S.Banner>
      <S.ContSection>
        <h2> 주요 서비스</h2>
        <S.CardCont>
          <Link to={"/location"}>
            <S.Card src={card1} alt="" loading="lazy" />
          </Link>
          <Link to={"/"}>
            <S.Card src={card2} alt="" loading="lazy" />
          </Link>
          <Link to={"/"}>
            <S.Card src={card3} alt="" loading="lazy" />
          </Link>
        </S.CardCont>
      </S.ContSection>
    </>
  );
};

export default Landing;
