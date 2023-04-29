import React, { Dispatch } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import styles from "./menu.module.css";
interface MenuProps {
  sidebarOpened: boolean;
  setSidebarOpened: Dispatch<React.SetStateAction<boolean>>;
}
const Menu = ({ sidebarOpened, setSidebarOpened }: MenuProps) => {
  const toggleSidebar = () => {
    setSidebarOpened(!sidebarOpened);
  };
  return (
    <div
      onClick={toggleSidebar}
      className={`${styles.menu} md:hidden dark:text-white dark:bg-stone-950`}
    >
      {sidebarOpened ? <MdClose size={50} /> : <BiMenu size={50} />}
    </div>
  );
};

export default Menu;
