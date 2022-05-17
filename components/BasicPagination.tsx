import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";

export default function BasicPagination() {
  return (
    <Grid mt={3} mb={3}>
      <Grid container justifyContent="center">
        <Pagination count={10} color="primary" />
      </Grid>
    </Grid>
  );
}
