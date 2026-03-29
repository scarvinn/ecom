import { View, Image, TouchableOpacity } from 'react-native';
import { ImageBackground, Text } from 'react-native';
import { signupStyles } from './Signup.ts';
import { ClassicTextInput } from '../textInput/TextInput.tsx';
import { useState } from 'react';
import { ClassicButton } from '../button/Button.tsx';
import { Ava } from '../avaPicker/AvaPick.tsx';
export const Signup = () => {
  const [email, useEmail] = useState('');
  const [password, usePassword] = useState('');
  const [phone, usePhone] = useState('');
  return (
    <View style={signupStyles.container}>
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
          placeholder="Your number"
          value={phone}
          onChangeText={usePhone}
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
          }}>
          {' '}
        </ClassicButton>
      </View>
    </View>
  );
};
