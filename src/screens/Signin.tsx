import React from 'react'

import { Center, Heading, Image, Text, VStack } from 'native-base'

import backgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';

export function Signin() {
  return (
    <VStack flex={1} bgColor='gray.700'>
      <Image 
        source={backgroundImg} 
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

      <Center>
        <Heading color='gray.100' fontSize={'xl'}>
          Acesse sua conta
        </Heading>
      </Center>

    </VStack>

  )
}
