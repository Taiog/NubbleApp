import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { AppTabScreenProps } from '../../../routes/navigationType'


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
    return (
        <Screen>
            <Text preset='headingLarge'>Home Screen</Text>
            <Button title='Settings' onPress={() => navigation.navigate('SettingScreen')} />
        </Screen>
    )
}
