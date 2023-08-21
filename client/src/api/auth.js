import axios from "./axios.js";



export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => {
  return axios.post(`/login`, user);
}

export const verifyTokenRequest = () => axios.get('/verify') 