import React from 'react'

interface Props {
  name?: string;
  textColor?: string;
  background?: string;
  onClick?: () => void;
}

const Button = ({ name, onClick, background, textColor = 'gray' }: Props) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: background }}>{name}</div>
  )
}

export default Button