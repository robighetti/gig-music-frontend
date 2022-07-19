import axios from 'axios';

const gigApi = axios.create({
  baseURL: 'http://localhost:3333',
});

gigApi.interceptors.request.use(config => {
  const token = localStorage.getItem('@gig:token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default gigApi;
