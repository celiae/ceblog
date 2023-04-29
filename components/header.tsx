import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBlog, FaHome } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import NavItem from "./button/nav-item/nav-item";
import DarkSwitch from "./switch/dark-switch";
import Locales from "./switch/locales";
import { useRouter } from "next/router";
import Loading from "./loading";

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const nav = [
    {
      name: t("home"),
      href: "/",
      icon: <FaHome />,
    },
    {
      name: t("post"),
      href: "/posts",
      icon: <RiArticleLine />,
    },
    {
      name: t("tag"),
      href: "/tags",
      icon: <RiArticleLine />,
    },
  ];
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <div
      className="sticky top-0 shadow-2xl grid
    bg-sky-500 dark:bg-zinc-900 text-white"
    >
      {loading && <Loading />}
      <div className="flex items-center gap-3 justify-between py-3 px-3">
        <div className="text-2xl flex items-center gap-3">
          <span className="mr-2">
            <FaBlog />
          </span>
          <span>{t("site name")}</span>
          <nav className="max-md:hidden flex gap-3 ml-3">
            {nav.map((n, index) => (
              <NavItem key={index} index={index} item={n} />
            ))}
          </nav>
        </div>
        <div className="col-span-5 justify-self-end flex items-center">
          <DarkSwitch />
          <Locales />
        </div>
      </div>
    </div>
  );
};

export default Header;
