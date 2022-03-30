import axios from "axios";

export async function getProduct() {
    try {
        const response = await axios.get('http://localhost:8000/Product')
        return response.data
    } catch (error) {
        throw error
    }
}

export async function addProduct(product) {
    try {
        const response = await axios.post('http://localhost:8000/AddProduct',product)
        return response.data
    } catch (error) {
        throw error
    }
}


export async function deleteProduct(id) {
    try {
        const response = await axios.delete(`http://localhost:8000/DeleteProduct/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

