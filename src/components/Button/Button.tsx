import { VFC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  className?: string;
  label: string;
  onClick?: () => void;
}

export const Button: VFC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};

  min-width: 240px;
  padding: 20px 24px;
  overflow: hidden;
  font: normal normal normal 18px/1.5em 'Roboto', sans-serif;
  letter-spacing: 4px;
  cursor: pointer;
  background-color: #c1e1e1;
  border-radius: 8px;
  box-shadow: -4px -4px 12px 0 #eff, 4px 4px 12px 0 #688;
  transition: all 0.2s ease-in-out;

  /* &:hover {
    box-shadow: -2px -2px 6px 0 #eff, 2px 2px 6px 0 #688;
  } */

  &:active {
    box-shadow: -1px -1px 4px 0 #eff, 1px 1px 4px 0 #688;
    transform: scale(0.99);
  }
`;
