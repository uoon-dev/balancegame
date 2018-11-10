import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.balancegame.io/qst/questions/'
})

export default instance;