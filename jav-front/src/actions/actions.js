import axios from "axios";

const url = `http://localhost:8080/`;
const headers = { 'Content-Type': 'application/json' };

export const getAllElements = async (endpoint) => {
    try {
        const response = await axios.get(`${url+endpoint}`,
            {
                headers
            }
        )
        console.log(`${url}element`);
        return response.data;
    } catch (e) {
        console.log('getData', e);
    }
}

export const createData = async (endpoint, data) => {
    try {
        const response = await axios.post(`${url + endpoint}`,
            data,
            {
                headers
            }
        )
        console.log(response);
        return response;
    } catch (e) {
        console.log('createData', e);
    }
}

export const deleteData = async (endpoint, id) => {
    console.log(url + endpoint + id)
    try {
        const response = await axios.delete(`${url + endpoint + "/" + id}`,
            {
                headers
            }
        )
        console.log(response);
        return response;
    } catch (e) {
        console.log('createData', e);
    }
}

export const updateData = async (endpoint, data, id) => {
    try {
        const response = await axios.put(`${url+ endpoint + "/"  + id}`,
            data,
            {
                headers
            }
        )
        console.log(response);
        return response;
    } catch (e) {
        console.log('updateData', e);
    }
}
