import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
    Container,
    Body,
    Footer,
    Header,
    Button,
    PdfIcon,
    Center,
    ImageIcon,
} from './styles';

interface Props {
    header?: { format: string; text: string };
    body: { text: string };
    footer?: { text: string };
    buttons?: [{ text: string }];
}

const Card: React.FC<Props> = ({ body, header, footer, buttons }) => {
    const footerComponent = <Footer>{footer?.text}</Footer>;
    let headerComponent = <></>;
    if (header?.format === 'TEXT') {
        headerComponent = <Header>{header?.text}</Header>;
    } else if (header?.format === 'DOCUMENT') {
        headerComponent = (
            <Header>
                <Center>
                    <PdfIcon />
                </Center>
            </Header>
        );
    } else if (header?.format === 'IMAGE') {
        headerComponent = (
            <Header>
                <Center>
                    <ImageIcon />
                </Center>
            </Header>
        );
    }
    return (
        <Container>
            {headerComponent}
            <Body>
                <ReactMarkdown>{body.text.replaceAll('*', '**')}</ReactMarkdown>
            </Body>
            {footerComponent}
            <Center>
                {buttons?.map((i) => (
                    <Button key={i.text} type="button">
                        {i.text}
                    </Button>
                ))}
            </Center>
        </Container>
    );
};

export default Card;
