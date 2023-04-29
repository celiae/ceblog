import styles from "@/styles/Posts.module.css";
import React from "react";
import {useTranslation} from "react-i18next";

const category = ["post", "develop", "linux"];

export default function Tags() {
    const {t} = useTranslation();
    // const changeCategory = (cusCategory: string) => {
    //     const result = posts.filter((posts) => posts.category === cusCategory);
    //     setPostList(result);
    // };
    return (
        <div className={"flex gap-6 m-3 p-3"}>
            {category.map((c, index) => (
                <div
                    key={index}
                    className="bg-sky-100 px-10 py-5 rounded cursor-pointer dark:bg-sky-900"
                >
                    {t(c)}
                </div>
            ))}
        </div>
    )
}