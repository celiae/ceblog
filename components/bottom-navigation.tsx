import * as React from "react";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container, Grid, Typography } from "@mui/material";
import { CopyrightOutlined } from "@mui/icons-material";

const msg = `官方文档具有系统阐述,它是一手的知识,学习资料的首选.Ceblog主要抄袭个人最常用的知识`;
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
    <Box>
      <Container>
        <Grid container spacing={2} mb={3} mt={3}>
          <Grid item>
            <Link href="https://github.com/celiae">
              <Button variant="contained" endIcon={<GitHubIcon />}>
                github
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/ceeliatt">
              <Button variant="contained" endIcon={<TwitterIcon />}>
                twitter
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://gmail.com">
              <Button variant="contained" endIcon={<EmailIcon />}>
                email
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <Typography>
            The official document has a systematic description, it is the
            first-hand knowledge, the first choice for learning materials.
            Ceblog mainly plagiarizes the most commonly used personal knowledge
          </Typography>
        </Grid>
        <BottomCopyright />
      </Container>
    </Box>
  );
}
