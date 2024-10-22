/* eslint @typescript-eslint/explicit-function-return-type: 0 */
import { useContext } from 'react';
import type { AuthContextProps } from './auth-context-interface';
import { AuthContext } from './auth-context';

export const useAuth = (): AuthContextProps => {
  const context = useContext<AuthContextProps | undefined>(AuthContext);

  if (!context) {
    throw new Error(
      'AuthProvider context is undefined, please verify you are calling useAuth() as child of a <AuthProvider> component.',
    );
  }

  return context;
};
