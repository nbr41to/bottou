import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { createUser } from './user';

export const googleLogin = async (): Promise<void> => {
  const auth = getAuth();
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    createUser({ id: user.uid, name: user.displayName });
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
