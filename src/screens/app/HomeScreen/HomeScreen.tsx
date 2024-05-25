import React, { useEffect, useState } from 'react'
import { Screen } from '../../../components/Screen/Screen'
import { Text } from '../../../components/Text/Text'
import { Button } from '../../../components/Button/Button'
import { AppTabScreenProps } from '../../../routes/navigationType'
import { postService } from '../../../domain/Post/postService'
import { Post } from '../../../domain/Post/postTypes'
import { FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle } from 'react-native'
import { PostItem } from '../../../components/PostItem/PostItem'
import { HomeHeader } from './components/HomeHeader'
import { usePostList } from '../../../domain/Post/useCases/usePostList'
import { HomeEmpty } from './components/HomeEmpty'


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
    const { postList, error, loading, refresh, fetchNextPage } = usePostList();

    function renderItem({ item }: ListRenderItemInfo<Post>) {
        return <PostItem post={item} />
    }

    return (
        <Screen style={$screen}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                onEndReached={fetchNextPage}
                onEndReachedThreshold={0.1}
                refreshing={loading}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />
                }
                contentContainerStyle={{ flex: postList.length === 0 ? 1 : undefined }}
                ListHeaderComponent={<HomeHeader />}
                ListEmptyComponent={
                    <HomeEmpty refetch={refresh} error={error} loading={loading} />
                }
            />
        </Screen>
    )
}

const $screen: StyleProp<ViewStyle> = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    flex: 1,
};
