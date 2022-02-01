import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Button } from './styles';

const Queries: React.FC = () => {
    return (
        <Container>
            <Header>
                <span>Queries</span>
                <Link to="query/new">
                    <Button>+ Query</Button>
                </Link>
            </Header>
        </Container>
    );
};

export default Queries;
