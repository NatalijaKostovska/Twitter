import {useEffect, useState} from 'react';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();

  const fetchFromApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchFromApi();
  }, []);

  return data;
};
export const customFetch = () => {};
