import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URI || 'http://localhost:3333/',
});

const getHumans = () => api.get('/humans');

export default {
  getHumans,
};
