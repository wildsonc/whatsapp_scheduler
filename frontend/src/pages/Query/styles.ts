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
  width: 40vw;
  color: var(--white);
  height: calc(100vh - 100px);
  padding: 5px;
  resize: none;
  :focus {
    border: 1px solid var(--company);
  }
`;

export const TitleInput = styled.input`
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  color: var(--white);
  background: var(--primary);
  :focus,
  :hover {
    border: 2px solid var(--text);
  }
`;

export const Form = styled.form``;

export const Select = styled.select`
  min-width: 100px;
  color: var(--white);
  background: var(--secondary);
  border-radius: 3px;
  padding: 10px;
  &.discret {
    padding: 0;
    background: var(--primary);
  }
`;

export const Label = styled.div`
  font-weight: bold;
  padding: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 3px;
  color: var(--white);
  width: 100%;
  border: 2px solid var(--secondary);
  margin-bottom: 10px;
  :focus {
    border: 2px solid var(--tertiary);
  }
  :hover {
    border: 2px solid var(--tertiary);
  }
`;

export const Columns = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Column = styled.div`
  padding: 0 10px;
`;
