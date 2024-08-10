import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

import Videos from "./Videos";
import { fetchFromApi } from "../utils/FetchFromApi";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

export default function SearchDetail() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <Box
        p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2, background: "#000" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search results for{" "}
          <span style={{ color: "#F31503" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  );
}
