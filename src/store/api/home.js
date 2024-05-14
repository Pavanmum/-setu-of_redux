
import axios from 'axios';


export const getAllDetails = (pagination) => {
    return new Promise(async(resolve, reject) => {
        try {
            console.log(pagination)
            const response = await axios.get(`https://dummyjson.com/products?skip=${pagination}&page=1`,);
            console.log(response.data);
            resolve({ data: response.data || [] });
        } catch (error) {
            if (error.response) {
                reject(`Error: ${error}`);
            } else {
                reject(`Error: ${error}`);
            }
        }
    });
};


