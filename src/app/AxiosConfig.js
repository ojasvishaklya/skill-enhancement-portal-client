import axios from 'axios';
const vm = "http://localhost";
const backendPort = 8080
const baseURL = vm + ":" + backendPort;
let headers = {};
const item = localStorage.getItem("user");
const token = item == null ? null : JSON.parse(item).authToken;

//check if we have an auth token
if (token) {

    headers.Authorization = "Bearer " + token;
    console.log(headers.Authorization);
}

const getJWT = async () => {
    if (token) {
        const expireDate = new Date(token.expiresAt);
        if (expireDate.getTime() - Date.now() <= 0) {
            const res = await axios.post("/auth/refresh/token", {
                "refreshToken": token.refreshToken
            });

            const user = JSON.parse(item);
            user.authToken = res.data.authenticationToken;
            user.expiresAt = res.data.expiresAt;

            localStorage.setItem("user", JSON.stringify("user"));
        }
        headers.Authorization = "Bearer " + token;
        console.log(headers.Authorization);
    }
}
token && getJWT();

//get new token if previous expired
const axio = axios.create({
    baseURL,
    headers
});


export default axio;
