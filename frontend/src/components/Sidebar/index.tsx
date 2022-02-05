import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import {
  Container,
  LinkWrapper,
  LinkLabel,
  SLink,
  DatabaseIcon,
  TaskIcon,
  QueryIcon,
  DashboardIcon,
  CompanyIcon,
  FlowerIcon,
  PLink,
  BlockIcon,
} from "./styles";

export interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
  const { pathname } = useLocation();
  return (
    <Container>
      {linksArray.map(({ icon, label, to }) => (
        <LinkWrapper key={label} className={pathname === to ? "active" : ""}>
          <SLink to={to}>
            {icon}
            <LinkLabel>{label}</LinkLabel>
          </SLink>
        </LinkWrapper>
      ))}
      <LinkWrapper>
        <PLink href="https://flower.explorernet.com.br/" target="_blank">
          <FlowerIcon />
          <LinkLabel>Flower</LinkLabel>
        </PLink>
      </LinkWrapper>
    </Container>
  );
};

const linksArray = [
  // {
  //   label: "Dashboard",
  //   icon: <DashboardIcon />,
  //   to: "/",
  // },
  {
    label: "Tasks",
    icon: <TaskIcon />,
    to: "/tasks",
  },
  {
    label: "Queries",
    icon: <QueryIcon />,
    to: "/queries",
  },
  {
    label: "Databases",
    icon: <DatabaseIcon />,
    to: "/databases",
  },
  {
    label: "Company",
    icon: <CompanyIcon />,
    to: "/company",
  },
  {
    label: "Blacklist",
    icon: <BlockIcon />,
    to: "/blacklist",
  },
];

export default Sidebar;
