import React, {useEffect, useState} from 'react';
import {useFetch} from '../../../../../../hooks/useFetch';
import {AddTweet} from '../AddTweet/AddTweet';
import {Post} from './Post';
import type {Post as PostType} from './types';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);
  useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <main className="col-6" style={{background: 'black'}}>
      <AddTweet />
      {data?.map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </main>
  );
};
