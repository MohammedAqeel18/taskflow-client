import axios  from 'axios';

const api = axios.create({
    baseURL: import.meta.enc.VITE_API_URL,
});

api.intercepters.request.use((config)=>{

if(token){
    config.headers.Authorization = `Bearer ${token}`;
}

return config;

})

export default api;