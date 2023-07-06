import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="paragraphLarge" italic>
            CoffStack
          </Text>
          <Button title="Entrar" marginBottom="s12" />
          <Icon name="camera" size={50} color="buttonPrimary" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
