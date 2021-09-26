import { VFC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  className?: string;
};

export const Header: VFC<HeaderProps> = ({ className }) => {
  return (
    <StyledHeader className={`${className}`}>
      <h1>Bottou🧘‍♀️</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px 0 16px 16px;
  text-align: center;
  h1 {
    font-size: 2.5rem;
  }
`;
