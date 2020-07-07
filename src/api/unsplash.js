import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZtcJmVfuVoM5qY2aBhBj7-KDGh2ksxxBt67K2xumkw4'
    }
});