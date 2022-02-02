import styled from "styled-components";
import { BsFileEarmarkPdfFill, BsFileEarmarkImageFill } from "react-icons/bs";

export const Container = styled.div`
  padding: 5px;
  margin: 10px;
  background: var(--bg);
  border-radius: 5px;
`;
export const Header = styled.div`
  font-size: 14px;
  padding: 3px;
  border-bottom: 2px solid var(--secondary);
`;
export const Body = styled.div`
  font-size: 13px;
  padding: 3px;
`;
export const Footer = styled.div`
  font-size: 12px;
  color: var(--text);
  padding: 3px;
`;
export const Button = styled.button`
  background: var(--secondary);
  color: var(--white);
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PdfIcon = styled(BsFileEarmarkPdfFill)`
  width: 44px;
  height: 44px;
  fill: var(--text);
  margin: 5px 0;
`;
export const ImageIcon = styled(BsFileEarmarkImageFill)`
  width: 44px;
  height: 44px;
  fill: var(--text);
  margin: 5px 0;
`;
