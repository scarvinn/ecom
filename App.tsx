import { StatusBar, useColorScheme } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { createStaticNavigation } from '@react-navigation/native';

import { RootStack } from './src/navigation/navigation.ts';
const Navigation = createStaticNavigation(RootStack);
function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppContent />
        </SafeAreaProvider>
    );
}

function AppContent() {
    const safeAreaInsets = useSafeAreaInsets();

    return <Navigation />;
}

export default App;
