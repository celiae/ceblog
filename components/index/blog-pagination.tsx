import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useAppSelector, useAppDispatch } from "../../pages/api/hooks";
import Post from "../../types/post";
import { toPage } from "../../pages/api/state/blog-slice";

type Props = {
  allPosts: Post[];
};

const BlogPagination = ({ allPosts }: Props) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.blog.currentPage);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(toPage(value));
  };
  return (
    <>
      <Grid container>
        <Grid item sx={{ m: "auto" }}>
          <Pagination
            count={Math.ceil(allPosts.length / 3)}
            page={currentPage}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </Grid>
    </>
  );
};
export default BlogPagination;
