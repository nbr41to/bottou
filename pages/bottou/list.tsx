import { NextPage } from 'next';
import { useAuth } from 'src/recoil/user/hook';

import { BottouList } from '../../src/components/page/Bottou/BottouList';

const BottouListPage: NextPage = () => {
  useAuth();
  return (
    <>
      <BottouList />
    </>
  );
};

export default BottouListPage;
