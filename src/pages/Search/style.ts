import styled from "styled-components";

export const FirstSection = styled.section`
  width: 100%;
  margin: 0 auto;
  margin-top: 120px;
`;

export const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin: 0 auto;
  padding: 0 24px;
  gap: 20px;
  h1,
  p {
    font-size: 32px;
  }
  h1 {
    color: #ffa100;
  }
  h5 {
    margin-top: 80px;
    font-size: 24px;
    font-weight: 300;
    color: #555;
  }
`;
export const FlexBoxOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const ResultCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 20px;

  div {
    max-width: 320px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    h2 {
      margin-top: 10px;
      font-size: 1.2rem;
      color: #333;
    }
  }
`;
