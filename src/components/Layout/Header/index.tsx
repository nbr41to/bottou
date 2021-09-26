import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  className?: string;
};

export const Header: VFC<HeaderProps> = ({ className }) => {
  const router = useRouter();
  return (
    <StyledHeader className={`${className}`}>
      <h1 onClick={() => router.push('/')}>Bottou🧘‍♀️</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px 0 16px 16px;
  text-align: center;
  h1 {
    width: fit-content;
    margin: 0 auto;
    font-size: 2.5rem;
    cursor: pointer;
  }
`;
