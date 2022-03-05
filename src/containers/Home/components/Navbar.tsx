import React from "react"
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { NavLink } from "../../../components/NavLink/NavLink";
import { RiHome7Fill, RiFileListLine } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { FiMail, FiBookmark } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
export const Navbar = () => {
  return (
    <Style.Container className="col-3">
      <NavLink name={'Home'} icon={<RiHome7Fill />} />
      <NavLink name={'Explore'} icon={<BiHash />} />
      <NavLink name={'Notifications'} icon={<VscBell />} />
      <NavLink name={'Messages'} icon={<FiMail />} />
      <NavLink name={'Bookmarks'} icon={<FiBookmark />} />
      <NavLink name={'Lists'} icon={<RiFileListLine />} />
      <NavLink name={'Profile'} icon={<BsPerson />} />
      <NavLink name={'More'} icon={<HiOutlineDotsCircleHorizontal />} />
      <Button name={'Tweet'} background="rgb(29, 155, 240)" />
    </Style.Container>
  )
}

const Style = {
  Container: styled.nav`
  background: #383b40;
  height: 100vh;
  border-right: 1px solid white;
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