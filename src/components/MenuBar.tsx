import { FC } from "react";
import ButtonItem from "./ButtonItem";
import { ILoginProps } from "./LoginForm";

const MenuBar: FC<ILoginProps> = ({ setLogin }) => {
  return (
    <div className="top-menu">
      <div className="logo">
        <img src="/img/logo.png" alt="cyferd-logo" />
      </div>
      <div className="menu">
        <ButtonItem name="Home" />
        <ButtonItem name="Platform" />
        <ButtonItem name="Solutions" />
        <div onClick={() => setLogin(true)}>
          <ButtonItem name="Login" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
