import React from 'react';
import styled from 'styled-components';
import Trending from '../../components/Trending/Trending';

export const Search = () => {
  return (
    <Style.Aside className="col-3">
      <h4 style={{color: 'white'}}>Trends for you</h4>
      <Trending category={'Entertainment'} word={'Britney'} tweets={'15.8K'} />
      <Trending category={'Entertainment'} word={'Britney'} tweets={'15.8K'} />
      <Trending category={'Entertainment'} word={'Britney'} tweets={'15.8K'} />
      <Trending category={'Entertainment'} word={'Britney'} tweets={'15.8K'} />
      <Trending category={'Entertainment'} word={'Britney'} tweets={'15.8K'} />
    </Style.Aside>
  );
};

const Style = {
  Aside: styled.aside`
    background: rgb(21, 24, 28);
    height: 500px;
    border-left: 1px solid white;
    border-radius: 16px;
    border-color: 1px solid rgb(21, 24, 28);
    padding: 20px;
  `,
};
