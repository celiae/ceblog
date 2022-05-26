import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import Author from "../types/author";
import { CardActionArea, Grid, Card } from "@mui/material";

type ImageTitle = {
  title: string;
  smallImage: string;
};

const ImageTitle = ({ title, smallImage }: ImageTitle) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Image src={smallImage} width={75} height={35} />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

type DateAuthor = {
  date: string;
  author: Author;
};

const DateAuthor = ({ date, author }: DateAuthor) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            <DateFormatter dateString={date} />
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt={author.name} src={author.picture} />
        </Grid>
        <Grid item>
          <Typography>{author.name}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  smallImage: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  smallImage,
}: Props) => {
  return (
    <>
      <CardActionArea>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <Grid
            sx={{ cursor: "pointer", borderBottom: "1px solid #008bf1" }}
            m={3}
          >
            <Grid container spacing={4}>
              <Grid item>
                <Image
                  src={coverImage}
                  alt={`Cover Image for ${title}`}
                  width={260}
                  height={160}
                  objectFit="contain"
                  quality={100}
                />
              </Grid>
              <Grid item>
                <ImageTitle title={title} smallImage={smallImage} />
                <DateAuthor date={date} author={author} />
              </Grid>
            </Grid>
            <Typography variant="h5" component="div" gutterBottom>
              {excerpt}
            </Typography>
          </Grid>
        </Link>
      </CardActionArea>
    </>
  );
};

export default PostPreview;
