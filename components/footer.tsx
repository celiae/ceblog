import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const toGithub = () => {
    router.push("https://github.com/celiae");
  };
  return (
    <div className="p-10 mt-10 bg-blue-100 dark:bg-stone-900">
      <div className="text-3xl font-extrabold mb-3 pb-3 flex items-center gap-2">
        <span>
          <FaPhoneAlt />
        </span>
        <span>{t("contact")}</span>
      </div>
      <div className="mt-3">
        <span className="m-1 pr-2">{t("twitter")}:</span>
        <span className="text-blue-500 underline cursor-pointer">ceeliatt</span>
      </div>
      <div className="mt-3">
        <span className="m-1 pr-2">Github:</span>
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={toGithub}
        >
          https://github.com/celiae
        </span>
      </div>
      <div className="mt-3">
        <span className="m-1 pr-2">Gmail:</span>
        <span className="text-blue-500 underline cursor-pointer">
          ceelia0g@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
