import React from "react"
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { NavLink } from "../../../components/NavLink/NavLink";

export const Navbar = () => {
  return (
    <Style.Container className="col-3">
      <NavLink />
      <Button name={'tweet'} background="blue" />
    </Style.Container>
  )
}

const Style = {
  Container: styled.nav`
  background: #383b40;
  height: 100vh;
  border: 1px solid white;
`,
  IconWrapper: styled.div`
  display: flex;
  border: 1px solid white;
  height: 50px;
  flex: 1;
  `
  ,
  TextWrapper: styled.div`
  display: flex;
  border: 1px solid yellow;
  height: 50px;
  flex: 5;
  `
}