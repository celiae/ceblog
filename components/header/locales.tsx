import * as React from "react";
import { useRouter } from "next/router";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

const Locales = () => {
  const locales = ["en-US", "zh-CN"];
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleChange = (event: SelectChangeEvent) => {
    router.push({ pathname, query }, asPath, { locale: event.target.value });
  };
  return (
    <>
      <Select autoWidth onChange={handleChange}>
        {locales.map((loc) => (
          <MenuItem key={loc} value={loc}>
            {loc}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
export default Locales;
