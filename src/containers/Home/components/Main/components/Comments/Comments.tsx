import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import PostPage from '../../../../../PostPage/PostPage';
import {Action} from '../Post/components/Action';

interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments = (props: any) => {
  const params = useParams();
  const [data, setData] = useState<IComments[]>([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      );
      const data: IComments[] = await response.json();
      setData(data);
    };

    fetchFromApi();
  }, []);

  return (
    <div style={{width: '500px'}}>
      {/* <PostPage /> */}
      {data?.map(comment => {
        return (
          <Styled.Wrapper key={comment.id}>
            <Styled.IconWrapper>
              <Styled.Icon></Styled.Icon>
            </Styled.IconWrapper>
            <Styled.MainContent>
              {comment.email}
              <br />
              {comment.body}
              <Styled.Actions>
                <Action actionNumber={444} />
                <Action actionNumber={151} />
                <Action actionNumber={1941} />
                <Action actionNumber={0} />
              </Styled.Actions>
            </Styled.MainContent>
          </Styled.Wrapper>
        );
      })}
    </div>
  );
};

export default Comments;

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
    border: 1px solid white;
    color: white;
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
