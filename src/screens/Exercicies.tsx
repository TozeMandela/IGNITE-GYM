import React from 'react'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {  Box, HStack, Heading, Icon, Image, ScrollView, Text, VStack } from 'native-base'

import { useNavigation } from '@react-navigation/native';

import StarIcon from '@assets/body.svg';
import RepetitionSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'
import { Button } from '@components/Button';


export function Exercicie() {
  const {goBack} = useNavigation();

  const handleBack = ()=>{
    goBack();
  }

  return (
    <>
      <VStack bgColor={'gray.600'} pt={16} px={10}> 
        <TouchableOpacity onPress={handleBack}>
          <Icon
            as={Feather}
            name="arrow-left"
            color={'green.500'}
            size={6}
          />
        </TouchableOpacity>

        <HStack 
          pt={6} 
          pb={8} 
          alignItems={'center'} 
          justifyContent={'space-between'}
        >
          <Heading 
            color={'white'} 
            flexShrink={1} 
            fontSize={'lg'}
          >
            Exercice
          </Heading>

          <HStack
            alignItems={'center'} 
          >
            <StarIcon />
            <Text 
              color={'white'} 
              fontSize={'sm'}
              ml={1}  
            >flexões</Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack px={10} my={6}>
          <Image
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicJ9g2znB6RyEbFcGhgjEYsA9tlRJOFIKw&usqp=CAU'}}
            alt='photo do exercicio'
            w={'full'}
            h={80}
            resizeMode='stretch'
            rounded={'lg'}
          />
          <Box
            bg={'gray.600'}
            mt={4}
            pt={6}
            px={6}
            justifyContent={'center'}
            rounded={'lg'}
          >
           <HStack mb={4} justifyContent={'space-between'} alignItems={'center'}>
        
            <HStack alignItems={'center'}>
              <SeriesSvg/>
              <Text
                pl={2}
                color={'white'}
              >3 Séries</Text>
            </HStack>
            <HStack alignItems={'center'}>
              <RepetitionSvg/>
              <Text
                pl={2}
                color={'white'}
              >12 Repetições</Text>
            </HStack>
           </HStack>
            <Button text='Marcar como realizado' width={'100%'} />
          </Box>
        </VStack>
      </ScrollView>
    </>
  )
}
