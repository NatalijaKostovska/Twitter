import React, {useState} from 'react';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  user?: User;
}

export const AuthContex = React.createContext<ContextValues>({
  user: undefined,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const [user, setUser] = useState<User>();
  // {username: 'Jane', password: '12345'}
  console.log('user', user);
  return <AuthContex.Provider value={{user}}>{children}</AuthContex.Provider>;
};
