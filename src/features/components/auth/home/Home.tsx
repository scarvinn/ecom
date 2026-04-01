import { Image, Text, View } from 'react-native';
import { homeStyles } from './Home.ts';
import { ClassicButton } from '../../../../common/button/Button.tsx';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={homeStyles.screen}>
            <View style={homeStyles.topScreen}>
                <Image
                    source={require('../../../../assets/home-logo.png')}
                    style={homeStyles.imageStyle}
                />
                <Text style={homeStyles.text}>Shoppe</Text>
                <Text>Beatiful eCommerence app</Text>
            </View>
            <View style={homeStyles.bottomScreen}>
                <ClassicButton
                    onPress={() => navigation.navigate('Signup')}
                    title="Let's get started"
                    customStyle={homeStyles.signupButton}
                />
                <ClassicButton
                    onPress={() => navigation.navigate('Login')}
                    title="I already have an account"
                    variant="white"
                    customStyle={homeStyles.loginButton}
                />
            </View>
        </View>
    );
};
