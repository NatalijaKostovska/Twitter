import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import Button from '../../../../../../components/Button/Button';

export const AddTweet = () => {
  const [tweet, setTweet] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      tweet: 'Hello! This is my first tweet.',
    },
  });

  const onTweetChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setTweet(text);
  };

  const postTweet = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({
            title: 'foo',
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
      setTweet('');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }
  if (loading) {
    return <div>Loading ..</div>;
  }

  //test
  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.TextArea
          {...register('tweet', {required: 'This field cannot be empty.'})}
          placeholder="What's happening?"
          maxLength={140}
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <div></div>
          <Button
            type="submit"
            background="rgb(29,155,240)"
            name="Tweet"
            textColor="white"
          />
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    height: 180px;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 1px solid red;
    margin: 10px 0 0 10px;
  `,
  Form: styled.form`
    display: flex,
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid yellow;
    height: 100px;
    width: 100%;
    margin-left: 10px;
  `,
  TextArea: styled.textarea`
    border: 1px solid blue;
    height: 100%;
    width: 100%;

    &::placeholder {
      color: black;
    }
  `,
  ActionsWrapper: styled.div`
      display: flex,
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 1px solid white;
  `,
};
