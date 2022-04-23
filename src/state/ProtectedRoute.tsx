import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContex} from '../contexts/AuthContex';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({children}: Props) => {
  const {user} = useContext(AuthContex);
  return user ? children : <Navigate to="/login" replace />;
};
