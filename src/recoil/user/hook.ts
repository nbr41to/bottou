import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import { auth_state } from './atom';
import { user_state } from './selector';

export const useAuth = () => {
  const router = useRouter();
  const [authState, setAuthState] = useRecoilState(auth_state);

  useEffect(() => {
    /* 初期化処理を終えて,露軍していなかった場合はログインページへ */
    if (authState.initialized && !authState.isLoggedIn) router.push('/login');
    if (authState.initialized) return;

    /* ログイン状態の確認と監視 */
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const id = user.uid;
        setAuthState({ initialized: true, isLoggedIn: true, id });
      } else {
        setAuthState({ initialized: true, isLoggedIn: false, id: '' });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [authState]);

  const user = useRecoilValueLoadable(user_state);
  useEffect(() => {
    if (user.state !== 'hasValue') return;
    if (!user.contents?.bottou_status) return;

    router.push('/bottou/now');
  }, [user]);

  return authState;
};
