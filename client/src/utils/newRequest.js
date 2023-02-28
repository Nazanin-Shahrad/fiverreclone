import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverrclone.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;