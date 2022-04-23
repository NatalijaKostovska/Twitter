import React, {useEffect, useState} from 'react';
import {useFetch} from '../../../../../../hooks/useFetch';
import {AddTweet} from '../AddTweet/AddTweet';
import {Post} from './Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const {
    data: posts,
    fetchFromApi,
    addNewTweet,
  } = useFetch<PostType[]>('posts', []);

  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <main className="col-6" style={{background: 'black'}}>
      <AddTweet addNewTweet={addNewTweet} />
      {posts?.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
};
