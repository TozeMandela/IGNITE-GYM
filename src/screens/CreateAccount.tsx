import React from 'react'
import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

import { Input } from '@components/Input/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';



export function Account() {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
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
            Crie sua conta
          </Heading>
        </Center>

        <Center>
          <VStack width={'80%'}>
            <Input placeholder='Nome' keyboardType='default'/>
            <Input placeholder='E-mail' keyboardType='email-address'/>
            <Input placeholder='Senha' secureTextEntry />
            <Input placeholder='Senha de confirmação' secureTextEntry />
            <Button
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
