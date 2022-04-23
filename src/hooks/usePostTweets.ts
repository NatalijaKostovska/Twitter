import { State } from 'history';
import { useContext, useReducer, useRef, useState } from 'react';
import type { Post as PostType } from '../containers/Home/components/Main/types';

interface IState {
  tweet: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: IState = {
  tweet: '',
  loading: false,
  error: false
}

type Action = |
{
  type: 'POST_TWEET_SUCCESS';
  payload: {
    tweet: string;
    loading: boolean;
    error: boolean;
  }
}
  |
{
  type: 'POST_TWEET_LOADING';
  payload: {
    tweet: string;
    loading: true;
    error: boolean;
  }
} |
{
  type: 'POST_TWEET_ERROR';
  payload: {
    tweet: string;
    loading: boolean;
    error: true;
  }
} |
{
  type: 'POST_TWEET_UPDATE';
  payload: {
    tweet: string;
    loading: boolean;
    error: boolean;
  }
}

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'POST_TWEET_SUCCESS': {
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error
      }
    }
    case 'POST_TWEET_LOADING': {
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error
      }
    }
    case 'POST_TWEET_SUCCESS': {
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error
      }
    }
    case 'POST_TWEET_UPDATE': {
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error
      }
    }
    default: {
      return state;
    }
  }
}

export const usePostTweet = (fn: (post: PostType) => void) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const someRef = useRef<HTMLTextAreaElement>(null);

  const postTweet = async () => {

    console.log('ref value', someRef, someRef.current?.value);
    const text = someRef?.current?.value;
    try {
      dispatch({
        type: 'POST_TWEET_LOADING',
        payload: {
          tweet: '',
          loading: true,
          error: false,
        },
      });
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          body: JSON.stringify({
            body: text,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const data = await response.json();
      dispatch({
        type: 'POST_TWEET_SUCCESS',
        payload: {
          tweet: data,
          loading: false,
          error: false,
        },
      });
      fn(data);
    } catch (error: any) {
      dispatch({
        type: 'POST_TWEET_ERROR',
        payload: {
          tweet: '',
          loading: false,
          error: true,
        },
      });
    } finally {
    }
  };

  return {
    postTweet, loading: state.loading, error: state.error,
    tweet: state.tweet,
    setTweet: (tweet: string) =>
      dispatch({
        type: 'POST_TWEET_UPDATE',
        payload: { tweet: tweet, loading: false, error: false }
      }),
    someRef
  }
}