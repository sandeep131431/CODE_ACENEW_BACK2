const axios = require('axios');

const axiosClient =  axios.create({
    baseURL: 'https://code-acenew-back-1.vercel.app',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


module.exports = axiosClient;

