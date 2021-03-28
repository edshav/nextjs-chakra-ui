import Axios from 'axios';

export const jsonPlaceholderApi = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
