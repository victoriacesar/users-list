import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://38375370-103e-44f9-ba50-67c60bff12f7.mock.pstmn.io/users'
})