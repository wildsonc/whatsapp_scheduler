import styled, { keyframes } from "styled-components";
import { BiLoaderCircle } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
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
  border: 1px solid var(--secondary);
  :focus {
    border: 1px solid var(--company);
  }
  @media (max-width: 900px) {
    width: 100%;
    height: calc(100vh - 300px);
  }
`;

interface TitleProps {
  length: number;
}

export const TitleInput = styled.input<TitleProps>`
  font-size: 24px;
  font-weight: bold;
  border-radius: 5px;
  width: ${(props) => props.length * 14}px;
  color: var(--white);
  background: var(--primary);
  border: 2px solid var(--primary);
  :focus,
  :hover {
    border: 2px solid var(--text);
  }
  @media (max-width: 900px) {
    max-width: 50vw;
  }
`;

export const Form = styled.form``;

export const Select = styled.select`
  min-width: 100px;
  width: 100%;
  color: var(--white);
  background: var(--secondary);
  border-radius: 3px;
  padding: 10px;
  &.discret {
    padding: 0 0 0 5px;
    max-width: 80px;
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
  flex-wrap: wrap;
  margin-top: 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  padding: 0 10px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

interface ArgsProps {
  active: number;
}

export const Args = styled.p<ArgsProps>`
  ::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    background: ${(props) => (props.active ? "green" : "red")};
  }
  ::after {
    content: ${(props) => (props.active ? ":" : "")};
  }
  span {
    font-weight: bold;
  }
`;

export const Table = styled.table`
  width: auto;
  margin: 10px;
  background: var(--bg);
  border-radius: 5px;
  padding: 10px;
  td {
    white-space: nowrap;
    border-bottom: 1px solid var(--secondary);
    padding: 5px;
  }
  tr {
    padding: 5px;
  }
`;

export const Wrapper = styled.div`
  overflow-x: auto;
  max-width: 45vw;
  margin: 10px 0;
`;
export const Message = styled.p`
  color: red;
  text-align: center;
  border-radius: 5px;
  padding: 15px;
  margin: 20px 0 0 10px;
  background: #ffcfcf;
  font-weight: bold;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadIcon = styled(BiLoaderCircle)`
  width: 24px;
  height: 24px;
  animation: ${rotate} 2s linear infinite;
`;
