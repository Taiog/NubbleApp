import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="paragraphLarge" italic>
            CoffStack
          </Text>
          <Button title="Entrar" marginBottom="s12" />
          <Button title="Entrar" loading />
          <Button title="Entrar" disabled />
          <Button preset="outline" title="Entrar" />
          <Button preset="outline" title="Entrar" loading />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
