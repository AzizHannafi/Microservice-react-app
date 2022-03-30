import axios from "axios";

export async function addOrder(order) {
    try {
        const response = await axios.post('http://localhost:8001/Orders/CreateOrder',order)
        return response.data
    } catch (error) {
        throw error
    }
}
