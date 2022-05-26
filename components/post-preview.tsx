import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import Author from "../types/author";
import { CardActionArea, Grid, Card } from "@mui/material";

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
            m={5}
          >
            <>
              <Grid>
                <Typography
                  variant="h4"
                  component="div"
                  gutterBottom
                  sx={{ color: "text.primary" }}
                >
                  {title}
                </Typography>
                <Image src={smallImage} width={75} height={35} />
              </Grid>
              <Image
                src={coverImage}
                alt={`Cover Image for ${title}`}
                width={260}
                height={160}
                objectFit="contain"
                quality={100}
              />
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
    </>
  );
};

export default PostPreview;
