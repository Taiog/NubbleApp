import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';


export function Router() {
  const isAutenticated = true
  return (
    <NavigationContainer>
      {isAutenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
