import axios from "axios";

const API_URL = "https://strip-1.onrender.com/api/orders";
const creatorder = (payload) => axios.post(`${API_URL}`, payload);
export default creatorder;
