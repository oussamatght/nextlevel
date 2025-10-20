import axios from "axios";

const API_URL = `https://nextlevel-backend-0dmg.onrender.com/api/products`;

export const products = {
    getAll: async() => {
        try {
            const res = await axios.get(`${API_URL}?populate=*`);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.error("Error fetching products:", err);
            throw err;
        }
    },

    getById: async(id) => {
        try {
            const res = await axios.get(
                `${API_URL}?filters[id][$eq]=${id}&populate=*`
            );
            return res.data;
        } catch (err) {
            console.error("Error fetching product:", err);
            throw err;
        }
    },

    getByCategory: async(category) => {
        try {
            const res = await axios.get(
                `${API_URL}?filters[category][$eq]=${category}&populate=*`
            );
            return res.data;
        } catch (err) {
            console.error("Error fetching products by category:", err);
            throw err;
        }
    }
};
