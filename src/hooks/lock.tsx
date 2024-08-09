//

// React

import { createContext, useContext, useState } from 'react';

// React Native

import { View } from 'react-native';

// App

type LockContextType = {
  isLocked: boolean;
  setIsLocked: (isLocked: boolean) => void;
};

export const LockContext = createContext<LockContextType>(undefined!);

type LockProviderProps = React.PropsWithChildren<object>;

export const LockProvider = (props: LockProviderProps) => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <LockContext.Provider
      value={{
        isLocked,
        setIsLocked,
      }}
    >
      <View
        style={{
          flex: 1,
          pointerEvents: !isLocked ? 'auto' : 'none',
        }}
      >
        {props.children}
      </View>
    </LockContext.Provider>
  );
};

export const useLock = () => {
  return useContext(LockContext);
};
