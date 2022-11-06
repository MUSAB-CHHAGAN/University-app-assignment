/** @format */

import {
  Autocomplete,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UniversityIcon from "../../assets/university 64.png";
import useFetch from "../../hooks/useFetch.ts";

const HomeScreen = () => {
  const [countries, isFetchingCountries] = useFetch(
    "https://restcountries.com/v3.1/all",
    true
  );

  const navigate = useNavigate();

  const changeHandler = (event, newValue) => {
    navigate(`/universities/${newValue.name.toLowerCase()}`);
  };

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "10rem 1rem 1rem 1rem",
            md: "0rem 1rem 1rem 1rem",
          },
          justifyContent: { xs: "flex-start", md: "center" },
        }}
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
            width: "100%",
            "& img": {
              marginRight: "1rem",
              marginLeft: { xs: "2rem", md: "0" },
            },
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: { xs: "400" },
          }}>
          <img src={UniversityIcon} alt="" />
          Search Universities
        </Typography>

        <Autocomplete
          options={countries.length ? countries : []}
          loading={isFetchingCountries}
          getOptionLabel={(country) =>
            country.flag + "   " + country.name
          }
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select country" />
          )}
          onChange={changeHandler}
        />
      </Box>
    </>
  );
};

export default HomeScreen;
