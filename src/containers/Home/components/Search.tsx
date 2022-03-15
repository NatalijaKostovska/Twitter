import React from 'react';
import styled from 'styled-components';
import Trending from '../../../components/Trending/Trending';

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
    borderLeft: 1px solid white;
    borderRadius: 16px';
    borderColor: 1px solid rgb(21, 24, 28);
    padding: 20px;
  `,
};
