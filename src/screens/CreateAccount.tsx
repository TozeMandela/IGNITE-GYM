import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Image, ScrollView, Text, VStack, Toast } from 'native-base'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input/Input';
import { Button } from '@components/Button';

type IpropsDataForm = {
  name: string,
  email: string,
  senha: string,
  senha1: string
}


const schema = yup.object({
  name: yup.string().required('Nome é obrigatório').min(7, 'precisa ser Nome completo'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail invalido!!!'),
  senha: yup.string().required('informe a senha!').min(5),
  senha1: yup.string().required('informe a senha de confirmação').oneOf([yup.ref('senha')], 'a senha de confirmação precisa ser igual a senha de cima!')
})


export function Account() {
  const { goBack } = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<IpropsDataForm>({
    resolver: yupResolver(schema)
  });

  const handleSingup = (data: IpropsDataForm)=> {
    

  }

  const handleGoBack = () => {
    goBack();
  }

  return (
    <VStack flex={1}>
      <ScrollView 
        contentContainerStyle={{flexGrow: 1}} 
        showsVerticalScrollIndicator={false}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt='pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />
          <Text color='gray.100'>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center mb={6}>
          <Heading color='gray.100' fontSize={'xl'}>
            Crie sua conta
          </Heading>
        </Center>

        <Center>
          <VStack width={'80%'}>
            <Controller 
              name='name' 
              control={control}
              render={({field: {onChange, value} }) => (
                <Input 
                  errMessage={errors.name?.message}
                  placeholder='name' 
                  id='name'
                  value={value} 
                  keyboardType='default' 
                  onChangeText={onChange}/>
              )}
            />

            <Controller 
              name='email'
              control={control}
              render={({field: {onChange, value}}) => (
                <Input 
                  errMessage={errors.email?.message}
                  placeholder='email' 
                  keyboardType='email-address'
                  id='email'
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />

            <Controller 
              name='senha'
              control={control}
              render={({field: {value, onChange}})=>(
                <Input 
                  id='senha'
                  errMessage={errors.senha?.message}
                  value={value}
                  onChangeText={onChange}
                  type='password'
                  placeholder='Senha' 
                  secureTextEntry />
              )}
            />

            <Controller 
              name='senha1'
              control={control}
              render={({field: {value, onChange}})=>(
                <Input 
                  id='senha1'
                  errMessage={errors.senha1?.message}
                  value={value}
                  onChangeText={onChange}
                  type='password'
                  placeholder='Senha confirmação' 
                  secureTextEntry 
                  onSubmitEditing={handleSubmit(handleSingup)}
                  returnKeyType='send'  
                />
              )}
            />

            <Button
            onPress={handleSubmit(handleSingup)}
              text='Criar e acessar'
              size="full"
            />
          </VStack>
        </Center>

        <Center mt={24}>
            <VStack width={'80%'}>
              <Button
              onPress={handleGoBack}
                text='Voltar para Login'
                size="full"
                variant={'outline'}
              />
            </VStack>
          </Center>

      </ScrollView>
    </VStack>

  )
}
