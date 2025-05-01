import axios from 'axios';

const API_KEY = 'ed9f47baa7eaf9f25a640fe324925531';
const TS = '1746074120';
const HASH = 'f110ae7fb1ef19a249215c4918320b80';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: API_KEY,
    ts: TS,
    hash: HASH,
  },
});

export default api;