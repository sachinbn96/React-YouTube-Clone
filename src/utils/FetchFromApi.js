import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   method: "GET",
  //   url: BASE_URL,
  params: {
    // relatedToVideoId: "7ghhRHRP6t4",
    // part: "id,snippet",
    // type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "5e4d682281msh255e0a84b28dbfdp1dcc81jsncb882917b1c5",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchFromApi(url) {
  // console.log(url);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}
