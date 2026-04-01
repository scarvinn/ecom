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
        type: `image/${extension}`,
        name: `user_${userId}_avatar.${extension}`,
    };
    formData.append('image', fileToUpload as any);
    formData.append('id', userId);

    try {
        console.log('formData to send:', formData);
        console.log('Api:', api + '/api/avatar');
        const response = await api.post('/api/avatar', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: (progressEvent) => {
                console.log(
                    `Upload Progress: ${
                        (progressEvent.loaded / progressEvent.total!) * 100
                    }%`,
                );
            },
        });
        console.log('Server response', JSON.stringify(response));
    } catch (error) {
        console.error('photo upload fail', error);
    }
};
