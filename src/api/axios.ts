import axios from "axios";


const AxiosModule = (history = null) => {
   
    let headers = {};

    const axiosInstance = axios.create({
        baseURL: "www.genai.com",
        headers,
    });

    axiosInstance.interceptors.response.use(
        (response:any) =>
            new Promise((resolve, reject) => {
                resolve(response);
            }),
        (error:any) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }else{
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        }
    );

    return axiosInstance;
};

export default AxiosModule;