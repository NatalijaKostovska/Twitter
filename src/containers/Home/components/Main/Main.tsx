import React, {useEffect, useState} from 'react';
import {Post} from './components/Post';
import type {Post as PostType} from './type';

export const Main = () => {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data: PostType[] = await response.json();
      setData(data);
    };

    fetchFromApi();
  }, []);

  return (
    <main className="col-6" style={{background: 'black'}}>
      {data?.map(post => {
        return <Post key={post.id} title={post.title} content={post.body} />;
      })}
    </main>
  );
};
