import { atom } from 'recoil';

export const auth_state = atom({
  key: 'auth_state',
  default: {
    initialized: false,
    isLoggedIn: false,
    id: '',
  },
});
