import { NextPage } from 'next';
import { useAuth } from 'src/recoil/user/hook';

import { Home } from '@/components/page/Home';

const HomePage: NextPage = () => {
  useAuth();
  return (
    <>
      <Home />
    </>
  );
};

export default HomePage;
