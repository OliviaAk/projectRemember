import { axiosApiInstance } from '.';

const setInterceptors = (store) => {
  axiosApiInstance.interceptors.request.use(async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    console.log('Ok');
    return config;
  });

  axiosApiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
      }
    }
  );
};
export default {
  setInterceptors,
};
