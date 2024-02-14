import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/Cju8AwzxGdr3KePPyzZCrZydeJDUxK8b',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

 export default api;