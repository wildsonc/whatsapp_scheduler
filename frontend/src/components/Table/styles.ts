import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export const Table = styled.table`
  max-width: 800px;
  margin: 10px;
`;

export const TableTR = styled.tr``;

export const TableTH = styled.th`
  padding-bottom: 5px;
  color: var(--text);
`;

export const TableTD = styled.td`
  text-align: center;
  padding: 5px 0;
  border-bottom: 1px solid var(--secondary);
  background: var(--primary);
  > button {
    background: var(--primary);
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
