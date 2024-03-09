import React from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { AppTabScreenProps } from '../../../routes/navigationType'

export default function NewPostScreen({ }: AppTabScreenProps<'NewPostScreen'>) {
    return (
        <Screen>
            <Text preset='headingSmall'>NewPostScreen</Text>
        </Screen>
    )
}