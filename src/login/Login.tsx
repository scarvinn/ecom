import { View } from 'react-native';
import { ImageBackground, Text } from 'react-native';
import { loginStyles } from './Login.ts';
import { Heart } from 'lucide-react-native';
import { ClassicTextInput } from '../textInput/TextInput.tsx';
import { useState } from 'react';
import { ClassicButton } from '../button/Button.tsx';
export const Login = () => {
  const [email, useEmail] = useState('');
  return (
    <ImageBackground
      source={require('../images/loginBackground.png')}
      resizeMode="stretch"
      style={loginStyles.container}>
      <View style={{ flex: 0.48 }}></View>
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
        <ClassicButton
          title="Done"
          customStyle={{
            justifyContent: 'center',
            margin: 5,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 50,
          }}>
          {' '}
        </ClassicButton>
        <ClassicButton
          title="Cancel"
          variant="white"
          customStyle={{
            justifyContent: 'center',
            margin: 5,
            marginLeft: 16,
            marginRight: 16,
          }}></ClassicButton>
      </View>
    </ImageBackground>
  );
};
