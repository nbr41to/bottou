import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type BottouAchievedProps = {
  className?: string;
};

export const BottouAchieved: VFC<BottouAchievedProps> = ({ className }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <StyledBottouAchieved className={`${className}`}>
      <div>Congratulations!!</div>
      <div className="reward_points">{query.reward}P GET!!</div>
      <Button label="ホームへ戻る" onClick={() => router.push('/')} />
    </StyledBottouAchieved>
  );
};

const StyledBottouAchieved = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  flex-direction: column;
  height: 100%;
  .reward_points {
    margin: 20px 0 32px;
    font-size: 24px;
  }
`;
