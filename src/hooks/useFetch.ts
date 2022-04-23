import { useEffect, useState } from 'react';
import { Post } from '../containers/Home/components/Main/types';

export const useFetch = <T>(url: string, initialState: Post[]) => {
  const [data, setData] = useState<Post[]>(initialState);

  const fetchFromApi = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`);
    const data = await response.json();
    setData(data);
  };

  const addNewTweet = (post: Post) => {
    setData(prevState => [post, ...prevState]);
  };

  return { data, fetchFromApi, addNewTweet };
};
export const customFetch = () => { };
