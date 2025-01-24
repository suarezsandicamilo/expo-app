//

// React

import { createContext, useState } from 'react';

type LockContextType = {
  isLocked: boolean;
  setIsLocked: (state: boolean) => void;
};

export const LockContext = createContext<LockContextType | undefined>(
  undefined,
);

export const LockProvider = (props: React.PropsWithChildren) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const value = {
    isLocked,
    setIsLocked,
  };

  return (
    <LockContext.Provider value={value}>{props.children}</LockContext.Provider>
  );
};
