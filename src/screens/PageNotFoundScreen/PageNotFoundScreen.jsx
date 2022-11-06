/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import UniversityLogo from "../../assets/university 64.png";

const PageNotFoundScreen = () => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        padding: "15rem 1rem 1rem",
      }}
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          gap: "2rem",
        }}>
        <Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center">
            <Box mr="1rem">
              <img src={UniversityLogo} alt="University Logo" />
            </Box>
            <Typography variant="h6" gutterBottom>
              Universities App
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
              component="span"
              sx={{ mr: "1rem" }}>
              404
            </Typography>
            <Typography variant="body2" gutterBottom component="span">
              That's an error.
            </Typography>
            <Typography variant="body2" gutterBottom>
              {`The requested URL ${pathname} was not found on this server.`}
              <Typography
                variant="body2"
                gutterBottom
                component="div">
                That's all we know.
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}>
          <img
            src="https://www.google.com/images/errors/robot.png"
            alt="Robot"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PageNotFoundScreen;
