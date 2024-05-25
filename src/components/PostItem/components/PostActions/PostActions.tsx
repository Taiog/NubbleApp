import { Post } from "../../../../domain/Post/postTypes";
import { Box, TouchableOpacityBox } from "../../../Box/Box";
import { Icon } from "../../../Icon/Icon";
import { Text } from "../../../Text/Text";
import { ItemAction } from "./ItemAction";


type Props = Pick<Post, 'commentCount' | 'favoriteCount' | 'reactionCount'>

export function PostActions({ commentCount, favoriteCount, reactionCount }: Props) {

    function likePost() {

    }

    function navigateToComments() {

    }

    function favoritePost() {

    }
    return (
        <Box flexDirection="row" mt="s16">
            <ItemAction onPress={likePost} icon={{ default: 'heart', marked: 'heartFill' }} text={reactionCount} marked={true} />
            <ItemAction onPress={navigateToComments} icon={{ default: 'comment', marked: 'comment' }} text={commentCount} marked={false} />
            <ItemAction onPress={favoritePost} icon={{ default: 'bookmark', marked: 'bookmarkFill' }} text={favoriteCount} marked={false} />
        </Box>
    )
}