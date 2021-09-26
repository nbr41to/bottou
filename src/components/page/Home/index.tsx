import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type HomeProps = {
  className?: string;
};

export const Home: VFC<HomeProps> = ({ className }) => {
  const router = useRouter();
  return (
    <StyledHome className={`${className}`}>
      <Button label="Bottouする" onClick={() => router.push('/bottou/list')} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  height: 100%;
  ${({ theme }) => theme.mixins.flexCenter};
`;
