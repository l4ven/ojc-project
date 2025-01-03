import styled from "styled-components";

interface LocationItemProps {
  isSelected: boolean;
}

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 80%;
  max-width: 650px;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 2px solid #ffc85b;

  h2 {
    margin: 0;
  }

  button {
    background: transparent;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #888;
    &:hover {
      color: #000;
    }
  }
  div {
    width: 20px;
  }

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    filter: opacity(0.5);
    transition: all 0.1s;
    &:hover {
      filter: opacity(0.8);
    }
  }
`;

export const ModalHeaderTwo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-left: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #eee;
  div {
    width: 30%;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 500px;
  overflow-y: scroll;
`;

export const Column = styled.div`
  width: 32%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const LocationItem = styled.div<LocationItemProps>`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) =>
    props.isSelected ? "#FFC85B" : "white"}; /* 선택된 항목에 배경색 적용 */
  border-radius: 8px;
  font-size: 18px;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "#FFC85B" : "#f0f0f0"}; /* hover 상태에서 색 변경 */
  }
`;

export const Button = styled.button`
  background-color: #ffc85b;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border-radius: 8px;
    background-color: #ffc85b;
  }
`;
