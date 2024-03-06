import axios from 'axios';

const api = axios.create({
  baseURL: 'https://we-246.polijrinternal.com',
});

export default api;
