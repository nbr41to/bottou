import { NextPage } from 'next';
import { useAuth } from 'src/recoil/user/hook';

import { BottouNow } from '@/components/page/Bottou/BottouNow';

const BottouNowPage: NextPage = () => {
  useAuth();
  return (
    <>
      <BottouNow />
    </>
  );
};

export default BottouNowPage;
