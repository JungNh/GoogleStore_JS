import axios from "axios";
import { AsyncStorage } from "@react-native-community/async-storage";
function createAxios() {
    var axiosInstant = axios.create();
    axiosInstant.defaults.baseURL = "http://api.futurelang";
    axiosInstant.defaults.timeout = 2000;
    axiosInstant.defaults.headers = { 'Content-Type': 'application/json' };
    
    axios.interceptors.request.use(function (config) {
        config.headers.token = await AsyncStorage.getItem('token')
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

}
