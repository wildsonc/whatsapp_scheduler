import styled from "styled-components";
import { FaRegEdit, FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const Table = styled.table`
  width: 90%;
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
  padding: 0 5px;
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
  width: 22px;
  height: 22px;
  cursor: pointer;
  fill: var(--tertiary);
  :hover {
    fill: var(--company);
  }
`;

export const DeleteIcon = styled(RiDeleteBinLine)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;

export const PlayIcon = styled(FaRegPlayCircle)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;

export const PauseIcon = styled(FaRegPauseCircle)`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  fill: var(--tertiary);
  cursor: pointer;
  :hover {
    fill: var(--company);
  }
`;
