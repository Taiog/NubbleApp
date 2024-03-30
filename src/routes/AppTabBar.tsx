import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Box, TouchableOpacityBox } from "../components/Box/Box";
import { Text } from "../components/Text/Text";
import { mapScreenToProps } from "./MapScreenToProps";
import { AppTabBottomTabParamList } from "./AppTabNavigator";
import { Icon } from "../components/Icon/Icon";
import { useAppSafeArea } from "../hooks/useAppSafeArea";
import { $shadowProps } from "../theme/theme";


export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const { bottom } = useAppSafeArea()
    return (
        <Box paddingTop='s12' flexDirection="row" backgroundColor={'background'} style={[{ paddingBottom: bottom }, $shadowProps]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const tabItem = mapScreenToProps[route.name as keyof AppTabBottomTabParamList]

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacityBox
                        accessibilityRole="button"
                        activeOpacity={1}
                        alignItems="center"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 }}
                        key={index}
                    >
                        <Icon name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused} color={isFocused ? 'primary' : 'backgroundContrast'} />
                        <Text color={isFocused ? 'primary' : 'backgroundContrast'} preset="paragraphCaption" semiBold mt="s4">
                            {tabItem.label}
                        </Text>
                    </TouchableOpacityBox>
                );
            })}
        </Box>
    );
}
