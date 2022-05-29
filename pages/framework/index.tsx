import * as React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const framework = () => {
  const frameworks = [
    {
      id: 0,
      name: "Vue.js",
      creator: "Evan You",
      url: "https://vuejs.org/",
    },
    {
      id: 1,
      name: "React.js",
      creator: "Facebook",
      url: "https://reactjs.org/",
    },
    {
      id: 2,
      name: "Next.js",
      creator: "Guillermo Rauch",
      url: "https://nextjs.org/",
    },
    {
      id: 3,
      name: "Django",
      creator: "Django",
      url: "https://www.djangoproject.com/",
    },
    {
      id: 4,
      name: "Laravel",
      creator: "Taylor Otwell",
      url: "https://laravel.com/",
    },
    {
      id: 5,
      name: "Express.js",
      creator: "TJ Holowaychuk",
      url: "https://expressjs.com/",
    },
  ];
  const UI = [{ name: "Material ui", creator: "", url: "https://mui.com" }];

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
        {frameworks.map((framework) => (
          <Grid item key={framework.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {framework.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {framework.creator}
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        spacing={2}
      >
        {UI.map((ui) => (
          <Grid item key={ui.name}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {ui.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {ui.creator}
                </Typography>
                <Typography variant="body2">
                  UI
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={ui.url}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default framework;
