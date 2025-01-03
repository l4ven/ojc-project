import styled from "styled-components";

export const OuterBox = styled.div``;

export const BackgroundCont = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff1de;
  height: 100vh;
  width: 100%;
  z-index: -999;
`;

export const InnerBox = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 24px;
`;

export const FirstSection = styled.section`
  display: flex;
  padding-top: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 380px;
  font-size: 32px;
  line-height: 48px;
  background-color: #fff;
`;

export const LocationBtn = styled.button`
  margin-top: 44px;
  width: 185px;
  height: 64px;
  background-color: #ffc146;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s;
  color: 000;
  &:hover {
    background-color: #efad2a;
    cursor: pointer;
  }
`;

export const BtnCont = styled.div`
  display: flex;
  gap: 30px;
`;

export const LocalBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 44px;
  width: 185px;
  height: 64px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s;
  color: 000;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;

export const RestaurantList = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  padding: 20px;
  padding-bottom: 40px;
`;

export const RestaurantItem = styled.div`
  justify-content: end;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  h3 {
    margin: 10px 0;
  }
`;
