import { useRouter } from 'next/router';
import { VFC } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { achievedBottou } from 'src/api/bottou';
import { current_bottou } from 'src/recoil/user/selector';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type BottouNowProps = {
  className?: string;
};

export const BottouNow: VFC<BottouNowProps> = ({ className }) => {
  const router = useRouter();
  const bottou = useRecoilValueLoadable(current_bottou);

  if (bottou.state === 'hasValue' && bottou.contents) {
    const content = bottou.contents;
    /* TODO)関数に取り出す */
    const now = new Date();
    const deff = now.getTime() - content.startedAt.toDate().getTime();
    const hours = Math.floor(deff / (1000 * 60 * 60));
    const minutes = Math.floor((deff / (1000 * 60)) % 60);
    const seconds = Math.floor((deff / 1000) % 60);

    const getReword = async () => {
      try {
        const reward = await achievedBottou({ id: content.id });
        router.push({ pathname: '/bottou/achieved', query: { reward } });
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <StyledBottouNow className={`${className}`}>
        <h3>
          あなたは、
          {(content.type === '5minutes' && '5分だけ') ||
            (content.type === '25minutes' && '25分集中') ||
            (content.type === '1hour' && '1時間やる')}
        </h3>
        <div className="elapsed_time">
          {hours}時間 {minutes}分 {seconds}秒 経過
        </div>

        <Button label="報酬を受取る" onClick={getReword} />
        {(content.type === '5minutes' && minutes >= 5) ||
        (content.type === '25minutes' && minutes >= 25) ||
        (content.type === '1hour' && hours >= 1) ? (
          <Button label="報酬を受取る" onClick={getReword} />
        ) : (
          seconds > 0 && <div>いちいちスマホを見るんじゃない🧞‍♀️</div>
        )}
      </StyledBottouNow>
    );
  }
  if (bottou.state === 'hasValue' && !bottou.contents) router.push('/');
  return <StyledBottouNow>...loading</StyledBottouNow>;
};

const StyledBottouNow = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  flex-direction: column;
  height: 100%;

  h3 {
    margin-bottom: 20px;
  }

  .elapsed_time {
    margin-bottom: 24px;
    font-size: 20px;
  }
`;
