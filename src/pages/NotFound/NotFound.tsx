import * as S from "./style";
import * as C from "../../allFiles";

const NotFound = () => {
  return (
    <>
      <C.Header />
      <S.InnerBox>
        <h2>404</h2>
        <h1>존재하지 않는 페이지입니다.</h1>
      </S.InnerBox>
    </>
  );
};
export default NotFound;
