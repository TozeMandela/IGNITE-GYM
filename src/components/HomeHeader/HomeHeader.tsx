import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {  HStack, Heading, Icon, Text, VStack } from 'native-base'


import { UserPhoto } from '@components/userPhotos/UserPhoto'
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
   
  return (
 
    <HStack
        bg={'gray.600'}
        pt={16} pb={5}
        px={8}
        alignItems={'center'}
        >
      <UserPhoto
        size={16}
        source={{uri: 'https://github.com/TozeMandela.png'}}
        mr={4}
        alt='photo perfil'
      />
      <VStack flex={1}>
        <Text
            color={'gray.100'}
            fontSize={'md'}
            >
                Olá,
        </Text>
        <Heading
            color={'gray.100'}
            fontSize={'md'}
            >
                Tozé Mandela
        </Heading>
      </VStack>
  
        <TouchableOpacity>
            <Icon
            as={MaterialIcons}
            name='logout'
            color={'gray.200'}
            size={7}
            />
        </TouchableOpacity>
    </HStack>


  )
}
