const axios = require('axios');
const apikey = process.env.NEXT_PUBLIC_STRAPI_API_Key;
const apiUrl = "https://nextlevel-backend-wz1k.onrender.com";
const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Authorization': `Bearer ${apikey}`
    }
});

module.exports = axiosClient;