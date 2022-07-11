import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Search, SearchIconWrapper, StyledInputBase } from "./search-style";

export default function SearchAppBar() {
  const startSearch = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let searchPattern = event.target.value;
  };

  return (
    <Toolbar sx={{ mb: 2 }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          autoFocus
          placeholder="Search…"
          onChange={startSearch}
          inputProps={{ "aria-label": "search" }}
        />
        <Button variant="outlined">Empty</Button>
      </Search>
    </Toolbar>
  );
}
