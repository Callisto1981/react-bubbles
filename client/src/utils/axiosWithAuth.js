import React from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "http://localhost:5000",
    headers: {
      Autherization: token
    }
  });
};
export default axiosWithAuth;
