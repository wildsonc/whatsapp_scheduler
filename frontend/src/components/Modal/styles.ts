import styled, { keyframes } from "styled-components";
import { RiCloseCircleFill } from "react-icons/ri";

const modal_animation = keyframes`
    from {
        opacity: 0
    };
    to {
        opacity: 1
    }
`;

export const Container = styled.div`
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  animation: ${modal_animation} 0.1s linear backwards;
  &.active {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  width: 400px;
  padding: 3px;
  background: var(--secondary);
  box-shadow: 0 0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export const Header = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid var(--tertiary);
  justify-content: space-between;
  > span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CloseBtn = styled(RiCloseCircleFill)`
  height: 18px;
  width: 18px;
  fill: var(--text);
  :hover {
    fill: indianred;
  }
`;

export const Content = styled.div`
  background: var(--secondary);
  padding: 10px;
`;
