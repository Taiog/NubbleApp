import { SimpleLogo } from "../../../../brand/SimpleLogo";
import { Box } from "../../../../components/Box/Box";
import { Icon } from "../../../../components/Icon/Icon";
import { useAppSafeArea } from "../../../../hooks/useAppSafeArea";

export function HomeHeader() {
    const { top } = useAppSafeArea()
    return (
        <Box flexDirection="row" justifyContent="space-between" style={{ paddingTop: top }} paddingHorizontal="s24" paddingBottom="s24">
            <SimpleLogo width={70} />
            <Box gap="s24" flexDirection="row">
                <Icon name="search" />
                <Icon name="bell" />
                <Icon name="chat" />
            </Box>
        </Box>
    )
}