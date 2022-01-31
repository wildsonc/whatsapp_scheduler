import React from "react";

import { Container, Main } from "./styles";
import Sidebar from "../Sidebar";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
