import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSucess';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { signUpSchema, SignUpSchema } from './signUpSchema';
import { AuthScreenProps } from '../../../routes/navigationType';



export function SignUpScreen({ navigation }: AuthScreenProps<'SignUpScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { control, formState, handleSubmit } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'onChange'
  })
  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
    // TODO: implementar
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name='username'
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name='fullName'
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{ mb: 's20' }}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name='email'
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name='password'
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button onPress={handleSubmit(submitForm)} title="Criar uma conta" disabled={!formState.isValid} />
    </Screen>
  );
}
