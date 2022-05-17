import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

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
    <Container>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <Box
          sx={{
            color: "primary.light",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "primary.dark",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            <CoverImage slug={slug} title={title} src={coverImage} />
            {title}
          </Typography>
          <Divider light />
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            <DateFormatter dateString={date} />
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {excerpt}
          </Typography>
          <Avatar alt={author.name} src={author.picture} />
        </Box>
      </Link>
    </Container>
  );
};

export default PostPreview;
