import React, { useState } from 'react';

import { Container, Wrapper, Header, CloseBtn, Content } from './styles';

export interface Props {
    isActive: boolean;
    header: string;
    hide: () => void;
    content: JSX.Element;
}

const Modal: React.FC<Props> = ({ isActive, header, hide, content }) => {
    return (
        <Container className={isActive ? 'active' : ''}>
            <Wrapper>
                <Header>
                    <span>{header}</span>
                    <CloseBtn onClick={hide} />
                </Header>
                <Content>{content}</Content>
            </Wrapper>
        </Container>
    );
};

export default Modal;
