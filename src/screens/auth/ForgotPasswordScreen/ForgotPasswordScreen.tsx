import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSucess';
import { ForgotPasswordSchema, forgotPasswordSchema } from './forgotPasswordSchema';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthScreenProps } from '../../../routes/navigationType';


export function ForgotPasswordScreen({ navigation }: AuthScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();

  const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onChange'
  })
  function submitForm(values: ForgotPasswordSchema) {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha Senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name='email'
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's40' }}
      />
      <Button disabled={!formState.isValid} onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  );
}
