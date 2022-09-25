import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Search, SearchIconWrapper, StyledInputBase } from "./search-style";
import {
  startSearch,
  stopSearch,
  appendSearchResult,
  emptySearchResults,
} from "../../pages/api/state/blog-slice";
import { useAppDispatch } from "../../pages/api/hooks";
import Post from "../../types/post";
type Props = {
  allPosts: Post[];
};

export default function SearchAppBar({ allPosts }: Props) {
  const dispatch = useAppDispatch();

  const changeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let searchPattern = event.target.value;
    if (searchPattern === "") {
      dispatch(stopSearch());
    } else {
      dispatch(emptySearchResults());
      dispatch(startSearch());
      let searchPatternArr = searchPattern.split("");
      let str = "(.*?)";
      let regStr = str + searchPatternArr.join(str) + str;
      let reg = RegExp(regStr, "i");
      allPosts.map((post) => {
        if (reg.test(post.title)) {
          dispatch(appendSearchResult(post));
        }
      });
    }
  };

  return (
    <Toolbar sx={{ mb: 2 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          autoFocus
          placeholder="Search Blog Title…"
          onChange={changeHandler}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Toolbar>
  );
}
