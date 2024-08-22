import axios from 'axios';
const testUrl = 'http://192.168.1.50:50432';

export const customFetch = axios.create({
  baseURL: testUrl,
  headers: {
    Accept: 'application/json',
  },
});
