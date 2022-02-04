import styled, { css } from "styled-components";
import { HiOutlineDatabase, HiOutlineClock } from "react-icons/hi";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscDashboard } from "react-icons/vsc";
import { FaRegBuilding } from "react-icons/fa";
import { SiCelery } from "react-icons/si";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  position: relative;
  border-right: solid 1px var(--secondary);
  background: var(--bg);
  @media (max-width: 900px) {
    display: none;
  }
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

export const PLink = styled.a`
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

const Icon = css`
  width: 24px;
  height: 24px;
  margin: 0 5px;
`;

export const DatabaseIcon = styled(HiOutlineDatabase)`
  ${Icon}
`;
export const TaskIcon = styled(HiOutlineClock)`
  ${Icon}
`;
export const QueryIcon = styled(AiOutlineConsoleSql)`
  ${Icon}
`;
export const DashboardIcon = styled(VscDashboard)`
  ${Icon}
`;
export const CompanyIcon = styled(FaRegBuilding)`
  ${Icon}
`;
export const FlowerIcon = styled(SiCelery)`
  ${Icon}
`;
