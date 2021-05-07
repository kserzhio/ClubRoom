import Axios from 'axios';
const instance = Axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/todos/1',
    withCredentials: true,
});
export default instance;