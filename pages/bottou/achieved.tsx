import { NextPage } from 'next';

import { BottouAchieved } from '../../src/components/page/Bottou/BottouAchieved';
import { useAuth } from '../../src/recoil/user/hook';

const AchievedBottouPage: NextPage = () => {
  useAuth();
  return (
    <>
      <BottouAchieved />
    </>
  );
};

export default AchievedBottouPage;
