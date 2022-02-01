import React from "react";

import { Container, Header, Button } from "./styles";

const Tasks: React.FC = () => {
  return (
    <Container>
      <Header>
        <span>Tasks</span>
        <Button>+ Task</Button>
      </Header>
    </Container>
  );
};

export default Tasks;
