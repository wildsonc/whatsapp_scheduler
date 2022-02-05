import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

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
export const Input = styled.input`
  background: var(--secondary);
  border: 2px solid var(--secondary);
  border-radius: 5px 0 0 5px;
  padding: 8px 0 8px 5px;
  width: 130px;
  color: var(--white);
  :hover,
  :focus {
    border: 2px solid var(--text);
    border-right: 2px solid var(--secondary);
  }
`;

export const Button = styled.button`
  padding: 10px 12px;
  border-radius: 0 5px 5px 0;
  background: var(--company);
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export const List = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;
  padding: 5px 0;
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--text);
  padding: 3px;
  cursor: pointer;
  :hover {
    background: var(--company);
    border-radius: 5px;
    fill: var(--bg);
  }
`;
