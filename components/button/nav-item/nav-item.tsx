import {
  useActiveContext,
  useSetActiveContext,
} from "@/context/active-nav/active";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "./nav-item.module.css";
interface Props {
  index: number;
  item: {
    icon: ReactNode;
    name: string;
    href: string;
  };
}
const NavItem = ({ index, item }: Props) => {
  const router = useRouter();
  const active = useActiveContext();
  const setActive = useSetActiveContext();
  const toPage = (index: number, href: string) => {
    setActive(index);
    router.push(href);
  };
  return (
    <div
      key={index}
      className={`${styles.navItem} dark:bg-zinc-600 text-white px-5 py-2
      ${active === index && "dark:text-amber-600 bg-zinc-900"}`}
      onClick={() => {
        toPage(index, `${item.href}`);
      }}
    >
      <span>{item.icon}</span>
      <span>{item.name}</span>
    </div>
  );
};

export default NavItem;
