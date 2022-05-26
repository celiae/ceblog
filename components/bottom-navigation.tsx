import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";
import { CopyrightOutlined } from "@mui/icons-material";

const msg = `看文档首选的是具有系统阐述官方文档,它是一手的知识,Ceblog主要记录自己最常用的`;
const copyright = `Copyright `;
const this_year = new Date().getFullYear();
const author = `ChengLiang`;

const BottomCopyright = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <Typography>{copyright}</Typography>
        </Grid>
        <Grid item>
          <CopyrightOutlined />
        </Grid>
        <Grid item>
          <Typography>{this_year}</Typography>
        </Grid>
        <Grid item>
          <Typography>{author}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default function SimpleBottomNavigation() {
  return (
    <Box sx={{}}>
      <Container>
        <Grid container spacing={2} mb={3} mt={3}>
          <Grid item>
            <Link href="https://github.com/celiae">
              <Button variant="contained" endIcon={<GitHubIcon />}>
                Send
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/ceeliatt">
              <Button variant="contained" endIcon={<TwitterIcon />}>
                Send
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://gmail.com">
              <Button variant="contained" endIcon={<EmailIcon />}>
                Send
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <Typography>{msg}</Typography>
        </Grid>
        <BottomCopyright />
      </Container>
    </Box>
  );
}
