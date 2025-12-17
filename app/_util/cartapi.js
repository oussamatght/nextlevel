import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/carts`;


const CartAPI = {
    addToCart: (payload) => axios.post(`${API_URL}`, payload),

    removeCart: async(documentId) => {
        try {
            const res = await axios.delete(`${API_URL}/${documentId}`);
            return res.data;
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    },

    getCartItems: async(email) => {
        try {
            const response = await axios.get(
                `${API_URL}?populate[products][populate]=banner&filters[email][$eq]=${email}`
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching cart items:", error);
            return { data: [] };
        }
    },
};

export default CartAPI;