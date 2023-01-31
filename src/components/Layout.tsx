import { FC, PropsWithChildren } from "react";
import "./Layout.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <p>
          Medals Table <span>by Miłosz Piskadło</span>
        </p>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
