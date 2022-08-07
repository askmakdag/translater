import axios from 'axios';
import {Config} from 'react-native-config';
import {setupCache} from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 3 * 1000,
});

// Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
const ApiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  adapter: cache.adapter,
});

// Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
ApiClient.interceptors.request.use(
  async function (config) {
    return config;
  },
  async function (error) {
    // Request failed, e.g. HTTP code 500
    // Ensure failed requests throw after interception
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  async function (response) {
    // Request was successful, e.g. HTTP code 200
    return response;
  },
  async function (error) {
    // Request failed, e.g. HTTP code 500
    // Ensure failed requests throw after interception
    return Promise.reject(error);
  },
);

// Export the newly created Axios instance to be used in different locations.
export default ApiClient;
