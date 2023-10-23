import axios from 'axios';

const http = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    accept: 'application/json',
  }
})

export default http;