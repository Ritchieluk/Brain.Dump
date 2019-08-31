import axios from "axios";
const config = require("./config.json");

let axi = null;


function initAxios(){
    if(axi) {
        return axi;
    } else {
        axi = axios.create({
            baseURL: config.axios_baseURL,
            timeout: config.axios_timeout,
            responseType: "json"
        }).interceptors.response.use(
            function(response){
                if(response.status==200)
                    return;
            },
            function(error){
                return Promise.reject(error)
            }
        );
        return axi;
    }
}
async function get(link){
    return await initAxios().get(link);
}
async function post(link, data){
    return await initAxios().post(link, data);
}

const wrapper = {
    axios: initAxios(),
}

export default wrapper;