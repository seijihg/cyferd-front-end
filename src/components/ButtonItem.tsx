import { FC } from "react";
import styled from "styled-components";

interface IButtonProps {
  name: string;
}

const ItemStyled = styled.p<{ primary?: boolean }>`
  transition: color 250ms;
  cursor: pointer;
  font-family: "Montserrat", Sans-serif;
  letter-spacing: 0.5px;
  color: #575757;

  &:hover {
    color: red;
    transition: color 250ms;
  }
`;

const ButtonItem: FC<IButtonProps> = ({ name }) => {
  return (
    <>
      <ItemStyled>{name}</ItemStyled>
    </>
  );
};

export default ButtonItem;
