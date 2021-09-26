import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

import { loadingState } from './atom';

export const useLoading = () => {
  const [loading, _setLoading] = useRecoilState(loadingState);

  const setLoading = useCallback(
    (isLoading: boolean) => {
      _setLoading(isLoading);
    },
    [loading],
  );

  return useMemo(() => ({ loading, setLoading }), [loading, setLoading]);
};
