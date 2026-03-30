import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  TextInputProps,
  View,
} from 'react-native';
import { textInputStyles } from './TextInput.ts';
import { Eye, EyeOff } from 'lucide-react-native';

interface classicTextInputInterface extends TextInputProps {
  isPasswordEye?: boolean;
}

const passwordEye = <Eye size={24} color="#666" style={{ marginRight: 20 }} />;
const passwordEyeOff = (
  <EyeOff size={24} color="#666" style={{ marginRight: 20 }} />
);

export const ClassicTextInput: React.FC<classicTextInputInterface> = ({
  isPasswordEye = false,
  ...props
}) => {
  const [eye, setEye] = useState(false);

  return (
    <View style={textInputStyles.container}>
      <TextInput
        secureTextEntry={isPasswordEye && !eye}
        {...props}
        style={textInputStyles.classicTextInputStyle}></TextInput>

      {isPasswordEye && (
        <TouchableOpacity onPress={() => setEye(!eye)}>
          {eye ? passwordEyeOff : passwordEye}
        </TouchableOpacity>
      )}
    </View>
  );
};
