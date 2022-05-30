import * as React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import { CardActionArea, Grid, Paper, Stack } from "@mui/material";

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

type Date = {
  createdate: string;
  modifydate: string;
};

const Date = ({ createdate, modifydate }: Date) => {
  return (
    <>
      <Grid>
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            发布日期
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            <DateFormatter dateString={createdate} />
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "primary.main" }}
          >
            更新日期
            <DateFormatter dateString={modifydate} />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

type Props = {
  title: string;
  coverImage: string;
  createdate: string;
  modifydate: string;
  excerpt: string;
  slug: string;
  smallImage: string;
};

const PostPreview = ({
  title,
  coverImage,
  createdate,
  modifydate,
  excerpt,
  slug,
  smallImage,
}: Props) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <Paper
        sx={{
          borderLeft: "5px solid #008bf1",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <CardActionArea>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <Grid
              sx={{
                cursor: "pointer",
              }}
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
                  <Date createdate={createdate} modifydate={modifydate} />
                </Grid>
              </Grid>
              <Typography variant="h5" component="div" gutterBottom>
                {excerpt}
              </Typography>
            </Grid>
          </Link>
        </CardActionArea>
      </Paper>
    </>
  );
};

export default PostPreview;
