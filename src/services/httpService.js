import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
