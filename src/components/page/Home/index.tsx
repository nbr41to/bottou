import { useRouter } from 'next/router';
import { VFC } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { user_state } from 'src/recoil/user/selector';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type HomeProps = {
  className?: string;
};

export const Home: VFC<HomeProps> = ({ className }) => {
  const router = useRouter();
  const user = useRecoilValueLoadable(user_state);

  return (
    <StyledHome className={`${className}`}>
      <Button label="Bottouする" onClick={() => router.push('/bottou/list')} />
      <div className="current_points">
        現在 {user.state === 'hasValue' && user.contents?.bottou_points} BP
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  flex-direction: column;
  height: 100%;
  .current_points {
    margin-top: 24px;
  }
`;
