import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const others = () => {
  const blogs = [
    {
      name: "ArchLinuxStudio",
      url: "https://archlinuxstudio.github.io",
      description: "专注于ArchLinux的技术文章",
      image: "/assets/blog/archlinux-installation/archlinux.svg",
      imageAlt: "ArchLinuxStudio",
    },
    {
      name: "Sukka",
      url: "https://blog.skk.moe/",
      description: "Web技术",
      image: "/assets/blog/archlinux-installation/archlinux.svg",
      imageAlt: "Sukka",
    },
    {
      name: "Balthild's Blog",
      url: "https://blog.skk.moe/",
      description: "科技文学",
      image: "/assets/blog/archlinux-installation/archlinux.svg",
      imageAlt: "Balthild's Blog",
    },
  ];

  return (
    <>
      <Head>
        <title>Other blog</title>
      </Head>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        spacing={2}
      >
        {blogs.map((blog) => (
          <Link href={blog.url} key={blog.url}>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={blog.image}
                    alt={blog.imageAlt}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};
export default others;
