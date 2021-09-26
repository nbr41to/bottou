import { useRouter } from 'next/router';
import { VFC } from 'react';
import { createBottou } from 'src/api/bottou';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type BottouListProps = {
  className?: string;
};

export const BottouList: VFC<BottouListProps> = ({ className }) => {
  const router = useRouter();
  const createBottouHandler = async (type: BottouType) => {
    try {
      await createBottou({ type });
      router.push('/bottou/now');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StyledBottouList className={`${className}`}>
      <div className="buttons">
        <Button
          label="5分だけ"
          onClick={() => createBottouHandler('5minutes')}
        />
        <Button
          label="25分集中"
          onClick={() => createBottouHandler('25minutes')}
        />
        <Button
          label="1時間やる"
          onClick={() => createBottouHandler('1hour')}
        />
      </div>
    </StyledBottouList>
  );
};

const StyledBottouList = styled.div`
  height: 100%;
  ${({ theme }) => theme.mixins.flexCenter};
  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin: 20px;
    }
  }
`;
