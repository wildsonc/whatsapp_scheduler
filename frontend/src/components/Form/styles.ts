import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    background: var(--secondary);
`;

export const FormGroups = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--secondary);
`;

interface Props {
    width?: string;
}
export const FormGroup = styled.div<Props>`
    width: ${(props) => (props.width ? props.width : '100%')};
    margin: 0 10px;
    background: var(--secondary);
`;

export const Label = styled.div`
    background: var(--secondary);
    font-weight: bold;
    padding: 5px;
`;

export const Input = styled.input`
    padding: 10px;
    border: none;
    border-radius: 3px;
    width: 100%;
    border: 2px solid var(--secondary);
    margin-bottom: 10px;
    :focus {
        border: 2px solid var(--tertiary);
    }
    :hover {
        border: 2px solid var(--tertiary);
    }
`;

export const Message = styled.p`
    background: var(--secondary);
    color: red;
    font-size: 12px;
`;
