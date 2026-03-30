import axios from 'axios';
import api from './api';
interface signinInterface {
    email: string;
    password: string;
}
export const loginPost = async ({ email, password }: signinInterface) => {
    try {
        const userData = {
            email: email,
            password: password,
        };
        const response = await api.post('/api/login/', userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Server fail', error.response?.data || error.message);
        } else {
            console.log('Unexpected error', error);
        }
        throw error;
    }
};
