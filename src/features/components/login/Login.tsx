import { ActivityIndicator, Alert, View } from 'react-native';
import { ImageBackground, Text } from 'react-native';
import { loginStyles } from './Login.ts';
import { Heart } from 'lucide-react-native';
import { ClassicTextInput } from '../common/textInput/TextInput.tsx';
import { useState } from 'react';
import { ClassicButton } from '../common/button/Button.tsx';
import { useNavigation } from '@react-navigation/native';
import { loginPost } from '../axiosFunctions/loginPost.ts';
import axios from 'axios';
export const Login = () => {
    const [email, useEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isaLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const activity = (
        <ActivityIndicator
            size="large"
            style={loginStyles.activityIndecs}></ActivityIndicator>
    );
    const validateData = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            Alert.alert('Wrong email!');
        } else {
            setIsLoading(true);
            try {
                const response = await loginPost({ email, password });
                Alert.alert(JSON.stringify(response));
            } catch (error) {
                if (axios.isAxiosError(error))
                    Alert.alert(
                        'Unexpected error',
                        JSON.stringify(error.response?.data),
                    );
            }
            setIsLoading(false);
        }
    };
    return (
        <ImageBackground
            source={require('../images/loginBackground.png')}
            resizeMode="stretch"
            style={loginStyles.container}>
            <View style={{ flex: 0.4 }}></View>
            <View style={loginStyles.bottomView}>
                <Text style={loginStyles.textHeader}>Login</Text>

                <Text style={loginStyles.textArticle}>
                    Good to see you back! <Heart size={19} color="#000000" />
                </Text>
                <ClassicTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={useEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <ClassicTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    isPasswordEye={true}
                />
                {isaLoading ? (
                    activity
                ) : (
                    <ClassicButton
                        title="Done"
                        customStyle={{
                            justifyContent: 'center',
                            margin: 5,
                            marginLeft: 16,
                            marginRight: 16,
                            marginTop: 50,
                        }}
                        onPress={validateData}>
                        {' '}
                    </ClassicButton>
                )}
                <ClassicButton
                    title="Cancel"
                    variant="white"
                    customStyle={{
                        justifyContent: 'center',
                        margin: 5,
                        marginLeft: 16,
                        marginRight: 16,
                    }}
                    onPress={() => navigation.goBack()}></ClassicButton>
            </View>
        </ImageBackground>
    );
};
