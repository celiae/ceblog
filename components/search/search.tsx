import React, { MouseEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";
interface Props {
  msg: string;
  toPosts: MouseEventHandler<HTMLButtonElement>;
}
const Search = ({ msg, toPosts }: Props) => {
  return (
    <button
      onClick={toPosts}
      className={`${styles.search} 
      text-lg md:text-xl lg:text-2xl
      px-3 md:p-2 lg:p-3 rounded
    bg-sky-500 
    dark:bg-neutral-700 
    dark:hover:bg-sky-500
    dark:hover:decoration-stone-800`}
    >
      <span className="hidden lg:block">{msg}</span>
      <span>
        <FaSearch />
      </span>
    </button>
  );
};

export default Search;
