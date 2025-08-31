import axios from "axios";

const API_URL = "http://localhost:1337/api/orders";
const creatorder = (payload) => axios.post(`${API_URL}`, payload);
export default creatorder;