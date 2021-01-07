import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  },
  // withCredentials: true
});

export default apiClient;