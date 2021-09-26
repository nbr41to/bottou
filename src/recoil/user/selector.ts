import { selector } from 'recoil';
import { getBottou } from 'src/api/bottou';
import { getUser } from 'src/api/user';

import { auth_state } from './atom';

export const user_state = selector<User>({
  key: 'user_state',
  get: async ({ get }) => {
    const auth = get(auth_state);
    if (!auth.id) return null;
    const user = await getUser({ id: auth.id });
    return user;
  },
});

export const current_bottou = selector<Bottou>({
  key: 'current_bottou',
  get: async ({ get }) => {
    const user = get(user_state);
    if (!user.id || !user.bottou_status) return null;
    const bottou = await getBottou({ id: user.bottou_status });
    return bottou;
  },
});
