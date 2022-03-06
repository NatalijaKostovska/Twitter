import React from 'react';
import styled from 'styled-components';

interface Props {
  category?: string;
  word?: string;
  tweets?: string;
}

const Trending = (props: Props) => {
  const { category, word, tweets } = props;
  return (
    <Style.Container>
      <Style.Tranding>{category} Trending</Style.Tranding>
      <Style.Word>{word}</Style.Word>
      <Style.Tweets>{tweets}</Style.Tweets>
    </Style.Container>
  )
};

const Style = {
  Container: styled.div`
  padding: 10px 0;
  `,
  Tranding: styled.div`
  display: flex;
  color: white;
  font-weight: 300;
  font-size: 10px;
  `,
  Word: styled.div`
  display: flex;
  color: white;
  font-weight: 500;
  font-size: 14px;
  `,

  Tweets: styled.div`
  display: flex;
  color: white;
  font-weight: 300;
  font-size: 10px;
  `
}

export default Trending;