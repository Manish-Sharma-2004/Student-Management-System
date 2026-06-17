// import axios from 'axios';

// const API = axios.create({
//   baseURL: '/api/v1',
//   withCredentials: true,
//   headers: { 'Content-Type': 'application/json' },
// });

// export default API;



import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export default API;






