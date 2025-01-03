import styled from "styled-components";

export const HeadCont = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #d9d9d9;
`;

export const HeadLogo = styled.img`
  height: 36px;
  width: auto;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
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

export const InputCont = styled.div`
  display: flex;
  gap: 10px;
`;

export const InputBox = styled.div`
  height: 40px;
  width: 480px;
  border-radius: 8px;
  border: 1.5px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s ease-in-out;
  input:focus {
    outline: none;
    border: none;
  }
  &:has(input:focus) {
    border: 2px solid #d9d9d9;
    border-color: #ccc;
  }
`;

export const HeadInput = styled.input`
  height: 80%;
  width: 90%;
  padding-left: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const HeadBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 8px;
  outline: none;
  border: none;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;
