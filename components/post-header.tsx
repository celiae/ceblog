import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Avatar alt={author.name} src={author.picture} />
      <DateFormatter dateString={date} />
      <Image
        src={coverImage}
        width={500}
        height={450}
        objectFit="contain"
        quality={100}
      />
    </>
  );
};

export default PostHeader;
