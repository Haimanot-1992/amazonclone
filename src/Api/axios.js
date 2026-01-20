import axios from "axios";
const axiosInstance = axios.create({
  //localinstanse of firebase functions
  baseURL: "http://127.0.0.1:5001/clone-1a118/us-central1/api",
  //deployed version of amazone render.com
  baseURL: "https://amazon-api-deploy-ox0g.onrender.com/",
});
export { axiosInstance };
