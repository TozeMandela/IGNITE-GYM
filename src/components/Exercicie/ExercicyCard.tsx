import React from 'react'
import { HStack, Heading, Icon, Image, Text, VStack} from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import {Entypo} from '@expo/vector-icons' 


type Props = TouchableOpacityProps & {
title: string,
description: string,
}


export function ExercicyCard({description, title, ...rest}: Props) {
  return (
    <TouchableOpacity 
        {...rest}
    >
        <HStack bg={'gray.400'} p={2} alignItems={'center'}>
          <Image
            source={{uri: 'https://pratiquefitness.com.br/blog/wp-content/uploads/2021/02/X-exerc%C3%ADcios-com-auxilio-da-cadeira-3.jpg'}}
            alt='ombro'
            h={16}
            w={16}
            rounded={'md'}
            resizeMode='cover'

          />

          <VStack ml={2} overflow={'hidden'} flex={1}>
              <Heading
                color={'white'}
                fontSize={'sm'}
              >
                {title}
              </Heading>
              <Text
              color={'gray.200'}
              numberOfLines={2}
              fontSize={'xs'}
              mt={1}
              >
                {description}
                      </Text>
          </VStack>
            
            <Icon as={Entypo} name='chevron-thin-right' color={'gray.300'}/>
        </HStack>
    </TouchableOpacity>
  )
}
