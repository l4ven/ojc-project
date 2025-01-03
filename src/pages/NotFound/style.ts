import styled from "styled-components";

export const InnerBox = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 24px;
  gap: 24px;
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 60px;
    color: #ffa100;
    font-weight: 900;
  }
`;
