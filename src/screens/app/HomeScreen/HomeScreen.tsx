import React, { useEffect, useState } from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { AppTabScreenProps } from '../../../routes/navigationType'
import { postService } from '../../../domain/Post/postService'
import { Post } from '../../../domain/Post/types'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { PostItem } from '../../../components/PostItem/PostItem'
import { HomeHeader } from './components/HomeHeader'


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
    const [postList, setPostList] = useState<Post[]>()
    useEffect(() => {
        postService.getList().then(list => setPostList(list))
    }, [])

    function renderItem({ item }: ListRenderItemInfo<Post>) {
        return <PostItem post={item} />
    }

    return (
        <Screen style={{ paddingTop: 0, paddingBottom: 0, paddingHorizontal: 0 }}>
            <FlatList data={postList} keyExtractor={item => item.id} renderItem={renderItem} showsVerticalScrollIndicator={false} ListHeaderComponent={<HomeHeader />}></FlatList>
        </Screen>
    )
}
