import { View, Alert, ActivityIndicator } from 'react-native';
import { ImageBackground, Text } from 'react-native';
import { signupStyles } from './Signup.ts';
import { ClassicTextInput } from '../../../common/textInput/TextInput.tsx';
import { useState } from 'react';
import { ClassicButton } from '../../../common/button/Button.tsx';
import { Ava } from '../../../common/avaPicker/AvaPick.tsx';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signinPost } from '../../../services/axiosFunctions/signinPost.ts';
import axios from 'axios';

export const Signup = () => {
    const [email, useEmail] = useState('');
    const [password, usePassword] = useState('');
    const [passwordConfimation, usePasswordConfimation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const activity = (
        <ActivityIndicator
            size="large"
            style={signupStyles.activityIndecs}></ActivityIndicator>
    );
    const validateData = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regex.test(email)) {
            Alert.alert('Wrong email!');
        } else if (password !== passwordConfimation) {
            Alert.alert("Password doesn't match!");
        } else {
            setIsLoading(true);
            try {
                const response = await signinPost({ email, password });
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
        <ScrollView style={signupStyles.container}>
            <ImageBackground
                source={require('../images/bubleBackground.png')}
                resizeMode="stretch"
                style={signupStyles.backImage}>
                <Text style={signupStyles.titleText}>{'Create\nAccount'}</Text>
                <View style={signupStyles.noAvaImage}>
                    <Ava />
                </View>
            </ImageBackground>
            <View style={signupStyles.bottomView}>
                <ClassicTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={useEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <ClassicTextInput
                    placeholder="Password"
                    textContentType="password"
                    value={password}
                    onChangeText={usePassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    isPasswordEye={true}
                />
                <ClassicTextInput
                    placeholder="Confirm password"
                    value={passwordConfimation}
                    onChangeText={usePasswordConfimation}
                    autoCapitalize="none"
                    autoCorrect={false}
                    isPasswordEye={true}
                />
                {isLoading ? (
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
                    onPress={() => navigation.goBack()}>
                    {' '}
                </ClassicButton>
            </View>
        </ScrollView>
    );
};
