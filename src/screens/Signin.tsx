import React from 'react'
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigateRoutesProps } from '@routes/auth/auth.routes';



export function Signin() {
  const {navigate } = useNavigation<AuthNavigateRoutesProps>();

  const handleCreate = ()=> {
    navigate('Account');
  }

  return (
    <VStack flex={1}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
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
            Acesse sua conta
          </Heading>
        </Center>

        <Center>
          <VStack width={'80%'}>
            <Input placeholder='E-mail' keyboardType='email-address'/>
            <Input placeholder='Senha' secureTextEntry />
            <Button
              text='Entrar'
              size="full"
            />
          </VStack>
        </Center>

        <Center mt={24}>
            <VStack width={'80%'}>
              <Center>
                <Text
                  color={'gray.100'}
                  fontSize={'sm'}
                  mb={3}
                  fontFamily={'body'}
                >
                  Ainda não tem uma conta?
                </Text>
              </Center >
              <Button
                text='Criar conta'
                size="full"
                variant={'outline'}
                onPress={handleCreate}
              />
            </VStack>
          </Center>

      </ScrollView>
    </VStack>

  )
}
