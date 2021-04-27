import axios from "axios";

export const axiosApiInstance = axios.create({
  baseURL: `http://localhost:3001`,
});

const get = async (url) => {
  const response = await axiosApiInstance.get(`${url}`);
  return response;
};

const post = async (url, data) => {
  const response = await axiosApiInstance.post(`${url}`, data);
  return response;
};

const patch = async (url, data) => {
  const response = await axiosApiInstance.patch(`${url}`, data);
  return response;
};

export const apiServer = { get, patch, post };
