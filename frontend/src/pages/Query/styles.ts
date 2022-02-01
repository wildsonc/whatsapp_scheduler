import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > span {
    font-size: 24px;
    font-weight: bold;
  }
`;

interface BtnProps {
  bgcolor?: string;
  color?: string;
}

export const Button = styled.button<BtnProps>`
  background: ${(props) => (props.bgcolor ? props.bgcolor : "var(--company)")};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Text = styled.textarea`
  background: var(--secondary);
  border-radius: 5px;
  max-width: 600px;
  height: calc(100vh - 100px);
  padding: 5px;
  margin-top: 10px;
  resize: none;
  :focus {
    border: 1px solid var(--company);
  }
`;
