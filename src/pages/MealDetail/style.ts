import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 40px;
  iframe {
    margin-top: 100px;
  }
`;

export const ContainerTwo = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  padding: 20px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: baseline;
`;

export const MealTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const MealImage = styled.img`
  width: 315px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const CategoryArea = styled.div`
  display: flex;
  justify-content: left;
  gap: 24px;
  margin-bottom: 30px;
`;

export const CategoryText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const AreaText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const IngredientsList = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    /* list-style-type: none; */
    padding: 0;
  }

  li {
    font-size: 18px;
    margin-bottom: 5px;
    margin-left: 20px;
  }
`;

export const Instructions = styled.div`
  max-width: 750px;
  h3 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
  }
`;

export const BackButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 30px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #555;
`;

export const ErrorText = styled.p`
  text-align: center;
  color: #000;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    margin: 0;
    font-size: 60px;
    color: #ffa100;
    font-weight: 900;
  }
`;

export const NoDataText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #777;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
