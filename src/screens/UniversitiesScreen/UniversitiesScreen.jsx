/** @format */

import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataGridComponent from "../../components/DataGrid/DataGrid";
import useFetch from "../../hooks/useFetch.ts";

const columns = [
  { field: "serialNumber", headerName: "Sr. No.", width: 150 },
  {
    field: "university",
    headerName: "University",
    width: 600,
  },
  {
    field: "region",
    headerName: "Region",
    width: 200,
    editable: true,
  },
  {
    field: "webSite",
    headerName: "Web Site",
    width: 300,
  },
];

const UniversitiesScreen = () => {
  const { country } = useParams();
  const [universities, isFetchingUniversities] = useFetch(
    `http://universities.hipolabs.com/search?country=${country}`,
    false
  );

  const [filteredUniversities, setFilteredUniversities] =
    useState(universities);

  const [searchValue, setSearchValue] = useState("");

  const rows = filteredUniversities.map((university, idx) => ({
    id: idx + 1,
    serialNumber: idx + 1,
    university: university.name,
    region: university["state-province"] ?? "Not Available",
    webSite: university["web_pages"][0] ?? "Not Available",
  }));

  const searchValueChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue.trim()) {
      const filteredData = universities.filter((university) =>
        university.name
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredUniversities(filteredData);
    } else {
      setFilteredUniversities(universities);
    }
  }, [searchValue, universities]);

  const handleRowClick = (params, event) => {
    console.log(params.row.webSite);
    if (params.row.webSite) window.open(params.row.webSite, "_blank");
  };

  return (
    <Box sx={{ padding: "5rem 1rem 1rem" }}>
      <Box
        my="1rem"
        display="flex"
        justifyContent="center"
        alignItems="center">
        <TextField
          placeholder="Search Universities by name"
          label="Search University"
          variant="outlined"
          sx={{ width: "70%" }}
          value={searchValue}
          onChange={searchValueChangeHandler}
        />
      </Box>
      <DataGridComponent
        columns={columns}
        rows={rows}
        isFetching={isFetchingUniversities}
        handleRowClick={handleRowClick}
      />
    </Box>
  );
};

export default UniversitiesScreen;
