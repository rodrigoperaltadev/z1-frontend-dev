import axios from 'axios'
import id from './ID'

export const api = axios.create({
  baseURL: "https://front-exercise.z1.digital/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default { id }