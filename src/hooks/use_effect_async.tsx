//

import { useEffect } from 'react';

export const useEffectAsync = (
  effect: () => Promise<void>,
  deps?: React.DependencyList,
) => {
  useEffect(
    () => {
      const fn = async () => {
        await effect();
      };

      fn();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
};
