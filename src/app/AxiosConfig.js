import axios from 'axios';

const baseURL = "http://localhost:8080";
let headers = {};
const item = localStorage.getItem("user");
const token = item==null ? null : JSON.parse(item).authToken;

//check if we have an auth token
if (token) {
    headers.Authorization = "Bearer "+ token ;
    console.log(headers.Authorization);
}
//get new token if previous expired
const axio = axios.create({
    baseURL,
    headers
});

export default axio;
