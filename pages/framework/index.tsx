import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import frameworks from "./frameworks.json";

const framework = () => {
  return (
    <>
      <Head>
        <title>Framework</title>
      </Head>
      <Grid>
        <Grid container spacing={2}>
          {frameworks.map((framework) => (
            <Grid item key={framework.name}>
              <Card sx={{ minWidth: 275 }}>
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

export default framework;
