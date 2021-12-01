import axios from 'axios';

// URL https://economia.awesomeapi.com.br/json/all/EUR-BRL

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
});

export default api;