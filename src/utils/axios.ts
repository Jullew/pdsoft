import axios from 'axios';

const API_URL = 'rickandmortyapi.com/api';

const instance = axios.create({
  baseURL: `https://${API_URL}`,
});

export default instance;
