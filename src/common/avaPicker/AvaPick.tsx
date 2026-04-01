import { Image, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary, MediaType } from 'react-native-image-picker';
interface avaInterface {
    onImageSelect: (asset: any) => void;
}
export const Ava = ({ onImageSelect }: avaInterface) => {
    const [imageUri, setImageUri] = useState<string>('');
    const openImagePicker = async () => {
        const options = {
            mediaType: 'photo' as MediaType,
            includeBase64: false,
            maxHeight: 100,
            maxWidth: 100,
        };
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                Alert.alert(response.errorMessage);
            } else {
                const selectedUri = response.assets?.[0].uri;
                if (selectedUri) {
                    setImageUri(selectedUri);
                    onImageSelect(selectedUri);
                }
            }
        });
    };
    return (
        <TouchableOpacity onPress={openImagePicker} style={styles.container}>
            <Image
                source={
                    imageUri
                        ? { uri: imageUri }
                        : require('../../assets/noAva.png')
                }
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
    },
});
