import { Post } from "../../domain/Post/types"
import { Box } from "../Box/Box"
import { PostActions } from "./components/PostActions/PostActions"
import { PostBottom } from "./components/PostBottom/PostBottom"
import { PostHeader } from "./components/PostHeader/PostHeader"
import { PostImage } from "./components/PostImage/PostImage"

interface Props {
    post: Post
}

export function PostItem({ post }: Props) {
    return (
        <Box marginBottom="s24" paddingHorizontal="s24">
            <PostHeader author={post.author} />
            <PostImage imageURL={post.imageURL} />
            <PostActions commentCount={post.commentCount} favoriteCount={post.favoriteCount} reactionCount={post.reactionCount} />
            <PostBottom author={post.author} commentCount={post.commentCount} text={post.text} />
        </Box>
    )
}