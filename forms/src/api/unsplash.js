import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qOhB20XVnGF176wo7VNTn--XY3SfPp5qsT-pskn7XTg",
  },
});
