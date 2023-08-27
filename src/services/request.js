import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:7777" });

export default request;