import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { AppTabScreenProps } from '../../../routes/navigationType'

export default function MyProfileScreen({ }: AppTabScreenProps<'MyProfileScreen'>) {
    return (
        <Screen>
            <Text preset='headingSmall'>MyProfileScreen</Text>
        </Screen>
    )
}