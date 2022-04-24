import React, {useState} from 'react';

interface User {
  username: string;
  password: string;
}

export interface ContextValues {
  login: ({username, password}: {username: string; password: string}) => void;
  user?: User;
}

export const AuthContex = React.createContext<ContextValues>({
  login: () => {},
  user: undefined,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>('');

  const login = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    if (username.includes('@') && password === 'password') {
      setUser({username, password});
    } else {
      setUser(undefined);
      setError('Check your username and password');
    }
  };
  return (
    <AuthContex.Provider value={{user, login}}>{children}</AuthContex.Provider>
  );
};
