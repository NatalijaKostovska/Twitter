import React, {ReactElement, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

type IconType = (props: IconType) => JSX.Element;

interface INavLink {
  icon?: ReactNode;
  name?: string;
  to: string;
}

export const NavLink = ({icon, name, to}: INavLink) => {
  return (
    <Style.Container>
      <Style.LinkExtended to={to}>
        <Style.IconWrapper>{icon}</Style.IconWrapper>
        <Style.TextWrapper>{name}</Style.TextWrapper>
      </Style.LinkExtended>
    </Style.Container>
  );
};
const Style = {
  Container: styled.nav`
    display: flex;
  `,
  IconWrapper: styled.div`
    display: flex;
    height: 50px;
    flex: 1;
    color: white;
    font-size: 30px;
    justify-content: center;
    align-items: center;
  `,
  TextWrapper: styled.div`
    display: flex;
    height: 50px;
    flex: 5;
    font-size: 18px;
    color: white;
    justify-content: flex-start;
    align-items: center;
    padding-left: 14px;
  `,
  LinkExtended: styled(Link)`
    display: flex;
  `,
};
