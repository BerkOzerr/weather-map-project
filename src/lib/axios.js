import axios from "axios";

class AxiosInterceptor {
  constructor(instanceConfig = {}) {
    // Initialize Axios instance with provided configuration
    this.axiosInstance = axios.create({
      ...instanceConfig,
    });

    // Add request interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // const accessToken = this.getAccessToken();
        // if (accessToken) {
        //   config.headers.Authorization = `Bearer ${accessToken}`;
        // }

        return config;
      },
      (error) => Promise.reject(error),
    );

    // Bind instance methods for convenience
    this.get = this.axiosInstance.get.bind(this.axiosInstance);
    this.post = this.axiosInstance.post.bind(this.axiosInstance);
    this.put = this.axiosInstance.put.bind(this.axiosInstance);
    this.delete = this.axiosInstance.delete.bind(this.axiosInstance);
  }

  // getAccessToken() {
  //   return localStorage.getItem("accessToken");
  // }
}

export const client = new AxiosInterceptor({});
