import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { AppScreenProps } from "../../../routes/navigationType";

export function SettingScreen({ }: AppScreenProps<'SettingScreen'>) {
    return (
        <Screen canGoBack>
            <Text preset='headingLarge'>Setting Screen</Text>
            <Button title='Settings' />
        </Screen>
    )
}
