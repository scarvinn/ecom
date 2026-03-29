import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View,  } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Home} from "./src/home/Home.tsx"
import {Login} from "./src/login/Login.tsx"
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from './src/signup/Signup.tsx';


const RootStack =createNativeStackNavigator({
  initialRouteName:'Home',
  screens:{
    Home:{
      screen: Home,
      options:{
        headerShown: false,
      }
    },
    Signup:{
      screen: Signup,
      options:{
        headerShown: false,
      }
    },
    Login: Login,
  },

});
const Navigation =createStaticNavigation(RootStack);
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
      
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
        <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
