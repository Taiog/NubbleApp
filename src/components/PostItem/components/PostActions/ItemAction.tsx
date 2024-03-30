import { TouchableOpacityBox } from "../../../Box/Box";
import { Icon, IconProps } from "../../../Icon/Icon";
import { Text } from "../../../Text/Text";

interface ItemActionProps {
    onPress: () => void
    marked: boolean
    text: number
    icon: {
        default: IconProps['name']
        marked: IconProps['name']
    }
}
export function ItemAction({ icon: icon, marked, onPress, text }: ItemActionProps) {
    return (
        <TouchableOpacityBox onPress={onPress} flexDirection="row" alignItems="center" mr="s24">
            <Icon name={marked ? icon.marked : icon.default} color={marked ? 'marked' : undefined} />
            {text > 0 && <Text bold preset={"paragraphSmall"} ml="s4">{text}</Text>}
        </TouchableOpacityBox>
    )
}