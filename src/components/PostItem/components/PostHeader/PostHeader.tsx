import { Image } from "react-native";
import { Box } from "../../../Box/Box";
import { Text } from "../../../Text/Text";
import { Post } from "../../../../domain/Post/types";

type Props = Pick<Post, 'author'>
export function PostHeader({ author }: Props) {
    return (
        <Box alignItems="center" flexDirection="row" mb="s16">
            <Image source={{ uri: author.profileURL }} style={{ width: 32, height: 32, borderRadius: 14 }} />
            <Text ml="s12" semiBold preset="paragraphMedium">
                {author.userName}
            </Text>
        </Box>
    )
}