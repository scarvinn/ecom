import axios from 'axios';
import api from './api';
interface signupInterface {
    email: string;
    password: string;
}
export const signupPost = async ({ email, password }: signupInterface) => {
    try {
        const userData = {
            email: email,
            password: password,
        };
        const response = await api.post('/api/register/', userData);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Server fail', JSON.stringify(error.response?.data));
        } else {
            console.log('Unexpected error', JSON.stringify(error));
        }
        throw error;
    }
};
