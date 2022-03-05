import React from 'react'
import styled from 'styled-components'

export const NavLink = () => {
  return (
    <div>
      <Style.IconWrapper></Style.IconWrapper>
      <Style.TextWrapper></Style.TextWrapper>
    </div>
  )
}
const Style = {
  Container: styled.nav`
  background: cyan;
  height: 100vh;
`,
  IconWrapper: styled.div`
  display: flex;
  border: 1px solid white;
  height: 50px;
  flex: 1;
  `,
  TextWrapper: styled.div`
  display: flex;
  border: 1px solid yellow;
  height: 50px;
  flex: 5;
  `
}