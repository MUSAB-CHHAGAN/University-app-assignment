/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function SearchAppBar({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1, position: "fixed", width: "100vw" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
              }}>
              Universities
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
}
