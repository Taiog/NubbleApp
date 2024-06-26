import { Box, BoxProps, TouchableOpacityBox } from '../Box/Box';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: Boolean;
  scrollable?: Boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}
        >
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8" preset="paragraphMedium" semiBold>
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
