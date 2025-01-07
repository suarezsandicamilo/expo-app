//

// React

import { useContext } from 'react';

// App

import { LockContext } from '@/contexts';

export const useLock = () => {
  const lock = useContext(LockContext);

  if (lock == undefined) {
    throw new Error('The LockContext has to be used in a LockProvider');
  }

  return lock;
};
