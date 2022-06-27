import React, { createContext, useCallback, useState, useContext } from 'react';
import gigApi from '../api/gigApi';

import { useHistory } from 'react-router-dom';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: UserProps;
}

interface UserProps {
  avatar: string;
  avatar_url: string;
  email: string;
  id: string;
  name: string;
}

interface AuthContextProps {
  user: UserProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@rbg:token');
    const user = localStorage.getItem('@rbg:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await gigApi.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@rbg:token', token);
    localStorage.setItem('@rbg:user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@rbg:token');
    localStorage.removeItem('@rbg:user');

    setData({} as AuthState);
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
