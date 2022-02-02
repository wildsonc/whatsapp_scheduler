import styled from "styled-components";
import { HiOutlineDatabase, HiOutlineClock } from "react-icons/hi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscDashboard } from "react-icons/vsc";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  position: relative;
  border-right: solid 1px var(--secondary);
  background: var(--bg);
`;

export const LinkWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  color: var(--text);
  &.active {
    background: var(--tertiary);
    color: var(--white);
    border-left: solid 2px var(--company);
  }
  :hover {
    background: var(--secondary);
  }
`;

export const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 12px;
  color: inherit;
`;

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
`;

export const DatabaseIcon = styled(HiOutlineDatabase)`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
export const TaskIcon = styled(HiOutlineClock)`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
export const QueryIcon = styled(AiOutlineConsoleSql)`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
export const DashboardIcon = styled(VscDashboard)`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
export const CompanyIcon = styled(FaRegBuilding)`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;
