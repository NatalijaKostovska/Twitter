import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {Action} from '../Home/components/Main/components/Post/components/Action';
import type {Post as PostType} from '../Home/components/Main/types';

const PostPage = (props: any) => {
  const location = useLocation();
  const params = useParams();
  const locationState = location.state as any;
  const [data, setData] = useState<PostType>();

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      const data = await response.json();
      setData(data);
    };
    if (!locationState?.id) {
      fetchFromApi();
    }
  }, [params.id]);

  return (
    <div>
      <Styled.Container>
        <Styled.AdditionalInfo>
          Bitcoin cryptocurrency - See more
        </Styled.AdditionalInfo>
        <Styled.Wrapper>
          <Styled.IconWrapper>
            <Styled.Icon></Styled.Icon>
          </Styled.IconWrapper>
          <Styled.MainContent>
            <Styled.Title>
              {locationState !== null ? locationState.title : data?.title}
            </Styled.Title>
            {/* <Styled.Content>{locationState.body}</Styled.Content> */}
            <Styled.Actions>
              <Action actionNumber={444} />
              <Action actionNumber={151} />
              <Action actionNumber={1941} />
              <Action actionNumber={0} />
            </Styled.Actions>
          </Styled.MainContent>
        </Styled.Wrapper>
      </Styled.Container>
    </div>
  );
};
export default PostPage;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    width: 100%;
    margin-bottom: 20px;
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    border: 1px solid red;
    color: white;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
  `,
  Icon: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
  `,
  MainContent: styled.div`
    display: flex;
    flex: 8;
    flex-direction: column;
    border: 1px solid yellow;
  `,
  Title: styled.h4`
    margin: 0;
    padding: 0;
    color: white;
    text-align: left;
  `,
  Content: styled.p`
    color: white;
  `,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
};
