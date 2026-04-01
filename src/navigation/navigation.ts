import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../features/components/auth/home/Home.tsx';
import { Signup } from '../features/components/auth/signup/Signup.tsx';
import { Login } from '../features/components/auth/login/Login.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '../features/components/profileScreen/profileScreen.tsx';
import { ShopScreen } from '../features/components/shopScreen/shopScreen.tsx';
import { CartScreen } from '../features/components/cartScreen/cartScreen.tsx';
import { Image } from 'react-native';
import React from 'react';

const TAB_ICONS: Record<string, { on: any; off: any }> = {
    Profile: {
        on: require('../assets/profileOn.png'),
        off: require('../assets/profileOff.png'),
    },
    Shop: {
        on: require('../assets/shopOn.png'),
        off: require('../assets/shopOff.png'),
    },
    Cart: {
        on: require('../assets/cartOn.png'),
        off: require('../assets/cartOff.png'),
    },
};

const TabNavigator = createBottomTabNavigator({
    screenOptions: ({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }: any): React.ReactNode => {
            const iconSource = TAB_ICONS[route.name][focused ? 'on' : 'off'];

            return;
        },
    }),
    screens: {
        Profile: ProfileScreen,
        Shop: ShopScreen,
        Cart: CartScreen,
    },
});
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
        mainScreens: TabNavigator,
    },
});
