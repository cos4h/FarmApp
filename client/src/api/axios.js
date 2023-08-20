import axios from "axios";

const instance = axios.create({
  baseURL: 'https://farmapp-0coz.onrender.com/',
  withCredentials: true
})

export default instance;