import { Platform } from 'react-native';

interface uploadAvatarInterface {
    userId: string;
    imageUri: string;
}
export const uploadAvatar = async ({
    userId,
    imageUri,
}: uploadAvatarInterface) => {
    const formData = new FormData();
    const fileToUpload = {
        uri:
            Platform.OS === 'android'
                ? imageUri
                : imageUri.replace('file://', ''),
    };
};
