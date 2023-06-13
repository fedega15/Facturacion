import axios from "axios";
import { BASE_URL } from "../config";
/*
Creo una instancia de axios que va a estar configurada
para validar si el usuario sigue autenticado en cada request que haga
*/
export const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})
axiosWithAuth.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401){
        window.location = "/login"
    }
    return Promise.reject(error);
  });

  export const publicAxios = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  })