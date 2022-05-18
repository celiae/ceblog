import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";
import { CardActionArea, Grid } from "@mui/material";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <CardActionArea>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <Grid sx={{ cursor: "pointer", borderBottom: "1px solid #008bf1" }} m={5}>
          <>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              {title}
            </Typography>
            <CoverImage slug={slug} title={title} src={coverImage} />
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "secondary.main" }}
            >
              <DateFormatter dateString={date} />
              <Avatar alt={author.name} src={author.picture} />
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {excerpt}
            </Typography>
          </>
        </Grid>
      </Link>
    </CardActionArea>
  );
};

export default PostPreview;
