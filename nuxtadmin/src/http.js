// axios
import axios from 'axios'
axios.defaults.timeout = 30000;
axios.defaults.baseURL = "http://localhost:4000/api";

export default axios