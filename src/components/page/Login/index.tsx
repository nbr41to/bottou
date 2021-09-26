import { useRouter } from 'next/router';
import { VFC } from 'react';
import { googleLogin } from 'src/api/auth';
import styled from 'styled-components';

import { Button } from '@/components/Button';

type LoginProps = {
  className?: string;
};

export const Login: VFC<LoginProps> = ({ className }) => {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      await googleLogin();
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <StyledLogin className={`${className}`}>
      <h2>Login and Sing up</h2>
      <br />
      <Button label="GoogleでLogin" onClick={handleLogin} />
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};

  flex-direction: column;
  height: 100%;
  h2 {
    font-size: 1.5rem;
  }
`;
