import styled, { keyframes } from "styled-components";

export const Banner = styled.div`
  margin-top: 80px;
  background-color: #fff1de;
  width: 100%;
  height: 485px;
`;

export const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;
`;

export const LeftCont = styled.div`
  h1 {
    font-size: 48px;
  }
  p {
    line-height: 1.5rem;
  }

  nav {
    display: flex;
    gap: 24px;
    margin-top: 36px;
  }
`;

export const RightCont = styled.div``;

export const LandBtn = styled.button`
  width: 125px;
  height: 64px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

const sineInOut = keyframes`
  0% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
`;

export const Food = styled.img`
  animation: ${sineInOut} 3s infinite ease-in-out;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const ContSection = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 485px;
  margin: 0 auto;
  margin-top: 80px;
  padding: 0 24px;
`;

export const CardCont = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const Card = styled.img`
  width: 100%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 24px 0px rgba(120, 120, 120, 0.25);
  }
`;
