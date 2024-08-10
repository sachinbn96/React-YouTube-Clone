import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Navbar } from "./";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/FetchFromApi";

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <>
      <Navbar />
      <Box minHeight="95vh" sx={{ background: "#000" }}>
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(24,1,1,1) 0%, rgba(231,39,58,1) 100%)",
              zIndex: 10,
              height: "300px",
              margin: "auto",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
}
