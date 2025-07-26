import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
export default function UseAxiosScure() {
    const {signOutUser}=useAuth()
    const naviget=useNavigate()
  useEffect(() => {
    axiosInstance.interceptors.response.use(response => {
      return response},
     error =>{
        console.log('error intrceptor ', error)
        if(error.status === 401 || error.status === 403){
            console.log('need to logout user')
            signOutUser()
            .then(()=>{
                console.log('logout user')
                naviget('/signin')
            })
            .catch(error => console.log(error.massege))
            
        }

        return Promise.reject(error)
    });
  }, []);
  return axiosInstance;
}
