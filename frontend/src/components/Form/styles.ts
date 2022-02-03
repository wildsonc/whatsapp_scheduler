import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const FormGroups = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  width?: string;
}
export const FormGroup = styled.div<Props>`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 0 10px;
`;

export const Label = styled.div`
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
  background: var(--tertiary);
  color: var(--white);
  :focus {
    border: 2px solid var(--text);
  }
  :hover {
    border: 2px solid var(--text);
  }
  &[type="checkbox"] {
    margin-top: 15px;
  }
`;

export const Message = styled.p`
  background: var(--secondary);
  color: red;
  font-size: 12px;
`;
