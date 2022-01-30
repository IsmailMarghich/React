import axios from "axios";
const KEY = "AIzaSyAUVtQ1z7MCrdqKKDbFcDl-tagHPsFU3WE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
    type: "video",
  },
});
