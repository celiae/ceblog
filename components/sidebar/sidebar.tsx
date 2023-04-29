import {
  useActiveContext,
  useSetActiveContext,
} from "@/context/active-nav/active";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaHome } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import styles from "./sidebar.module.css";
interface SidebarProps {
  sidebarOpened: boolean;
}
const Sidebar = ({ sidebarOpened }: SidebarProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const active = useActiveContext();
  const setActive = useSetActiveContext();
  const toPage = (index: number, href: string) => {
    setActive(index);
    router.push(href);
  };
  const nav = [
    {
      name: t("home"),
      href: "/",
      icon: <FaHome />,
    },
    {
      name: t("posts"),
      href: "/posts",
      icon: <RiArticleLine />,
    },
  ];
  return (
    <div
      className={`${styles.sidebar} dark:bg-stone-950
     ${sidebarOpened ? styles.sidebarShow : styles.sidebarHidden}`}
    >
      <nav className="py-3 grid gap-2">
        {nav.map((n, index) => (
          <div
            key={index}
            className={`${styles.navItem} dark:bg-zinc-700
            ${active === index && styles.active + " dark:bg-blue-500"}`}
            onClick={() => {
              toPage(index, `${n.href}`);
            }}
          >
            <span>{n.icon}</span>
            <span>{n.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
