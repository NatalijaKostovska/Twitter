import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  textColor?: string;
  background?: string;
  onClick?: () => void;
  type?: React.HTMLProps<HTMLButtonElement>['type'];
}

const Button = ({
  name,
  onClick,
  background,
  textColor = 'gray',
  type,
  ...rest
}: Props) => {
  return (
    <button {...rest} onClick={onClick} style={{backgroundColor: background}}>
      {name}
    </button>
  );
};

const Style = {
  Container: styled.div`
    color: white;
    font-size: 20px;
    padding: 10px 60px;
    border-radius: 25px;
    margin: 10px 0px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    &:disabled {
      color: grey;
      opacity: 0.7;
      cursor: default;
    }
  `,
};
export default Button;
