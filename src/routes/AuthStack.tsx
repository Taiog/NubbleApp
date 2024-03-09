import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconProps } from '../components/Icon/Icon';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';



export type AuthStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    SuccessScreen: {
        title: string;
        description: string;
        icon: Pick<IconProps, 'name' | 'color'>;
    };
    ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();


export function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
            />
        </Stack.Navigator>
    )
}