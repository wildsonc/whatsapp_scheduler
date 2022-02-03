import styled from "styled-components";
import { FaRegEdit, FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const Table = styled.table`
  max-width: 800px;
  width: 100%;
  margin: 10px;
  td {
    text-align: center;
    padding: 5px 0;
    border-bottom: 1px solid var(--secondary);
    background: var(--primary);
    > button {
      background: var(--primary);
    }
  }
  th {
    padding-bottom: 5px;
    color: var(--text);
  }
`;

export const TableTR = styled.tr``;

export const TableTH = styled.th`
  padding-bottom: 5px;
  color: var(--text);
`;

interface TDProps {
  active?: boolean;
}

export const TableTD = styled.td<TDProps>`
  padding: 5px 0;
  border-bottom: 1px solid var(--secondary);
  background: var(--primary);
  > button {
    background: var(--primary);
  }
  &.active {
    ::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 5px;
      background: ${(props) => (props.active ? "green" : "red")};
    }
  }
`;

export const EditIcon = styled(FaRegEdit)`
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: var(--tertiary);
  :hover {
    fill: var(--company);
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;

export const PlayIcon = styled(FaRegPlayCircle)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;

export const PauseIcon = styled(FaRegPauseCircle)`
  width: 18px;
  height: 18px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;
