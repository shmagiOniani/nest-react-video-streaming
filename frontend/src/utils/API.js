import axios from "axios";
import { variables } from "../utils/utils"
// import {notification } from "antd";
// import translations from '../components/translation/translation.json';



// const lang = localStorage.getItem("lang");
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const API = axios.create({
  baseURL: variables.development.BASE_API,
});

// API.defaults.timeout = 10000;
API.withCredentials = true;


API.interceptors.request.use(function (config) {
  config.headers.token = token;
  config.headers.user = user;
  return config;
}, null, {});



export default API;
