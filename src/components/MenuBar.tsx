import { FC } from "react";
import ButtonItem from "./ButtonItem";
import DescSection from "./DescSection";

const MenuBar: FC = () => {
  return (
    <div className="top-menu">
      <div className="logo">
        <img src="/img/logo.png" />
      </div>
      <div className="menu">
        <ButtonItem name="Home" />
        <ButtonItem name="Platform" />
        <ButtonItem name="Solutions" />
        <ButtonItem name="Login" />
      </div>
    </div>
  );
};

export default MenuBar;
