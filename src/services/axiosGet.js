import axios from 'axios';

export const getDataAxios = async () => {
    const request = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    return request.data;
}

export const getCoinId = async (id) =>{
    const request = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    return request;
}