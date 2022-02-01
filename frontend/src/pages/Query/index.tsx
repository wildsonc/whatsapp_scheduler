import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Button, Text } from './styles';

const Query: React.FC = () => {
    return (
        <Container>
            <Header>
                <span>New Query</span>
                <Link to="/queries">
                    <Button>↩ Back</Button>
                </Link>
            </Header>
            <Text name="sql"></Text>
        </Container>
    );
};

export default Query;
