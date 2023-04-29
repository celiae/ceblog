import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar/sidebar";
import Menu from "./button/menu/menu";
import { useThemeContext } from "@/context/theme/theme";
import ActiveProvider from "@/context/active-nav/active-provider";
type ChildrenType = {
  children: React.ReactElement;
};
const Layout = ({ children }: ChildrenType) => {
  const theme = useThemeContext();
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  return (
    <div className={theme}>
      <div
        className="dark:bg-stone-800 dark:text-white
            min-h-screen duration-200"
      >
        <ActiveProvider>
          <Sidebar sidebarOpened={sidebarOpened} />
          <Header />
        </ActiveProvider>
        <Menu
          sidebarOpened={sidebarOpened}
          setSidebarOpened={setSidebarOpened}
        />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
