import React from 'react';
import { useForm } from 'react-hook-form'
import { Screen } from '../../../components/Screen/Screen';
import { Button } from '../../../components/Button/Button';
import { Text } from '../../../components/Text/Text';
import { Alert } from 'react-native';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { LoginSchema, loginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '../../../routes/navigationType';


export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {

  const { control, formState, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  function submitForm({ email, password }: LoginSchema) {
    Alert.alert(`Email: ${email} ${`\n`} Senha: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>


      <FormTextInput
        control={control}
        name='email'
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }} />

      <FormPasswordInput
        control={control}
        name='password'
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's20' }}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)} marginTop="s48" title="Entrar" />
      <Button
        onPress={navigateToSignUpScreen}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
