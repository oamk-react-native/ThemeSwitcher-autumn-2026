import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import MainAppBar from './components/MainAppBar';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import { useThemeStore } from './state/useThemeStore';

const Stack = createNativeStackNavigator();

export default function App() {
  //const isDark = useThemeStore((s) => s.isDark)
  const { isDark } = useThemeStore()
  const paperTheme = isDark ? MD3DarkTheme : MD3LightTheme

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <MainAppBar {...props} />,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </PaperProvider>
)
}