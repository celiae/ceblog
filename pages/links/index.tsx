import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import links from "./links.json";

const others = () => {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        spacing={2}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            <Grid item>
              <Card sx={{ minWidth: 345 }}>
                <CardActionArea>
                  {/* <CardMedia
                    component="img"
                    image={link.image}
                    alt={link.imageAlt}
                  /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {link.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {link.description}
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
