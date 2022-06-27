import axios from 'axios';

const avaliefacilApi = axios.create({
  baseURL: 'https://backdigital.avaliefacil.com.br',
});

avaliefacilApi.interceptors.request.use(config => {
  const token = localStorage.getItem('@Avalie:token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default avaliefacilApi;
