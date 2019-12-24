import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-reactjs-learn.firebaseio.com/'
});

export default instance;