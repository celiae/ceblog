import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import links from "./links.json";
import frameworks from "./frameworks.json";

const others = () => {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>
      <Typography variant="h4">Links</Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginBottom={6}
        spacing={2}
      >
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            <Grid item>
              <Card sx={{ minWidth: 345 }}>
                <CardActionArea>
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
      <Typography variant="h4">Frameworks</Typography>
      <Grid>
        <Grid container spacing={2}>
          {frameworks.map((framework) => (
            <Grid item key={framework.name}>
              <Card sx={{ minWidth: 150 }} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {framework.name}
                  </Typography>
                  <Typography variant="body2">
                    Web Framework
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={framework.url}>
                    <Button size="small">Learn More</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default others;
