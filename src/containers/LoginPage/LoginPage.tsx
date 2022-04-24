import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import {AuthContex, ContextValues} from '../../contexts/AuthContex';

interface FormProps {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const {user, login} = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    // defaultValues: {
    //   tweet: 'Hello! This is my first tweet.',
    // },
  });

  useEffect(() => {
    console.log('user od eff', user);
    if (user) {
      navigate('/');
    }
  }, [user]);

  const onSubmit = (data: any) => {
    console.log('data', data);
    login(data);
  };
  console.log('user', user);

  return (
    <Styled.Container onSubmit={handleSubmit(onSubmit)}>
      <Styled.Title>Login</Styled.Title>
      <Styled.Input
        type={'email'}
        {...register('username', {
          required: true,
        })}
      />
      <Styled.Input
        type={'password'}
        {...register('password', {
          required: true,
        })}
      />
      <Button background="white" type="submit" name="login" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    padding: 100px;
  `,
  Title: styled.h1`
    color: white;
  `,
  Input: styled.input`
    border: 2px solid red;
    margin-bottom: 20px;
  `,
};
export default LoginPage;
