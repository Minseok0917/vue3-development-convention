import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

function fetchUser() {}

const { success, error } = fetchUser();
