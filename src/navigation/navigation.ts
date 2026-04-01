import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../features/components/auth/home/Home.tsx';
import { Signup } from '../features/components/auth/signup/Signup.tsx';
import { Login } from '../features/components/auth/login/Login.tsx';

export const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screenOptions: {
        headerShown: false,
    },
    screens: {
        Home: {
            screen: Home,
        },
        Signup: {
            screen: Signup,
        },
        Login: {
            screen: Login,
        },
    },
});
