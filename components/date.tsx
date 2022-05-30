import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { parseISO, format } from "date-fns";

type Props = {
  msg: string;
  dateString: string;
};

const Date = ({ msg, dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <>
      <Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              {msg}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              sx={{ color: "primary.main" }}
            >
              <time dateTime={dateString} style={{ color: "#000" }}>
                {format(date, "LLLL	d, yyyy")}
              </time>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Date;
