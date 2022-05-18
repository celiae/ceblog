import * as React from "react";
import Avatar from "@mui/material/Avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
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
      <CoverImage title={title} src={coverImage} />
    </>
  );
};

export default PostHeader;
