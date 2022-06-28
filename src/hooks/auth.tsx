import React, { createContext, useCallback, useState, useContext } from 'react';
//import gigApi from '../api/gigApi';

import { useHistory } from 'react-router-dom';

import { useToast } from './toast';

import userMock from '../mocks/userMock';

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserProps {
  avatar?: string;
  avatar_url?: string;
  email: string;
  id: string;
  name: string;
}

interface AuthState {
  token: string;
  user: UserProps;
}
interface AuthContextProps {
  user: UserProps;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@gig:token');
    const user = localStorage.getItem('@gig:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    /*  const response = await gigApi.post('/sessions', {
      email,
      password,
    }); */

    //const { token, user } = response.data;

    /* TODO: MOCK */
    const user = userMock.find(
      usr => usr.email === email && usr.password === password,
    );

    if (!user) {
      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais!',
      });
      return;
    }

    const token: string =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2MzQ1OTQ2LCJleHAiOjE2NTY0MzIzNDZ9.uwSIKa8aSYlfhtawgx2o8QkO0MAsdCrZc9f3nshcn-8';

    localStorage.setItem('@gig:token', token);
    localStorage.setItem('@gig:user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@gig:token');
    localStorage.removeItem('@gig:user');

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
