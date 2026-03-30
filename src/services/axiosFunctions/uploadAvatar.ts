import { Platform } from 'react-native';
import api from './api';

interface uploadAvatarInterface {
    userId: string;
    imageUri: string;
}
export const uploadAvatar = async ({
    userId,
    imageUri,
}: uploadAvatarInterface) => {
    const formData = new FormData();
    const extension = imageUri.split('.').pop()?.toLowerCase();
    const fileToUpload = {
        uri:
            Platform.OS === 'android'
                ? imageUri
                : imageUri.replace('file://', ''),
        image: `image/${extension}`,
        name: `user_${userId}_avatar`,
    };
    formData.append('avatar', fileToUpload);
    formData.append('userId', userId);

    try {
        const response = await api.post('/photo', formData, {
            headers: {
                Accept: `applicatioon/${extension}`,
            },
        });
        console.log('Server responce', JSON.stringify(response));
    } catch (error) {
        console.error('photo upload fail', error);
    }
};
