import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/app/HomeScreen/HomeScreen';
import FavoriteScreen from '../screens/app/FavoriteScreen/FavoriteScreen';
import MyProfileScreen from '../screens/app/MyProfileScreen/MyProfileScreen';
import NewPostScreen from '../screens/app/NewPostScreen/NewPostScreen';

export type AppTabBottomTabParamList = {
    HomeScreen: undefined
    NewPostScreen: undefined
    FavoriteScreen: undefined
    MyProfileScreen: undefined
}
const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}