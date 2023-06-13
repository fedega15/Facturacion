import axios from "axios";

import { config } from '/src/config.js';

const BASE_URL = config.BASE_URL;
axios.defaults.withCredentials = true;

export const createUserRequest = async (user) => {
  return await axios.post(`${BASE_URL}/api/register`, user);
};

export const loginRequest = async (user) => {
  return await axios.post(`${BASE_URL}/login`, user);
};

export const logoutRequest = async () => {
  return await axios.post(`${BASE_URL}/api/user/logout`)
};

//Este es el header que deben tener las peticiones que vayan protegidas
export const IsLogged = async () => {
  return await axios.get(`${BASE_URL}/api/user/verifyuser`)
};

export const reqResetEmail = async (userMail) => {
  return await axios.post(`${BASE_URL}/api/user/forgot-password`, userMail);
};

export const changePass = async (values,resettoken) =>{
  return await axios.post(`${BASE_URL}/api/user/new-password`,values,{
    headers: {resettoken},
  });
};