import React from 'react'
import { HStack, Heading, Icon, Image, Text, VStack} from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import {Entypo} from '@expo/vector-icons' 

export interface PropsexercicieCard {
  imgURI?: string,
  title: string,
  description: string,
}


type Props = TouchableOpacityProps & PropsexercicieCard;


export function ExercicyCard({description, title, imgURI, ...rest}: Props) {
  return (
    <TouchableOpacity 
        {...rest}
    >
        <HStack bg={'gray.400'} p={2} alignItems={'center'} mb={3}>
          <Image
            source={{uri: imgURI}}
            alt='ombro'
            h={16}
            w={16}
            rounded={'md'}
            resizeMode='stretch'

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
