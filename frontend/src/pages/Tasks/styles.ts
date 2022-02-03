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

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: var(--secondary);
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

export const Select = styled.select`
  min-width: 100px;
  width: 100%;
  color: var(--white);
  background: var(--tertiary);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`;
