import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/app/HomeScreen/HomeScreen';
import { SettingScreen } from '../screens/app/SettingScreen/SettingScreen';
import { AppTabNavigator } from './AppTabNavigator';

export type AppStackParamList = {
    AppTabNavigator: undefined;
    SettingScreen: undefined
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export function AppStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
            initialRouteName="AppTabNavigator">
            <Stack.Screen name='AppTabNavigator' component={AppTabNavigator} />
            <Stack.Screen name='SettingScreen' component={SettingScreen} />
        </Stack.Navigator>
    )
}