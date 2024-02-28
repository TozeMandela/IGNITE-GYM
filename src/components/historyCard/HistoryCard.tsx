import React from 'react'
import { HStack, Heading, Text, VStack} from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'


export interface PropsexercicieCard {
  date?: string,
  hour?: string,
  description?: string,
}


export function HistoryCard() {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'space-between'}
      p={5}
      bg={'gray.600'}
      width={'90%'}
      margin={'auto'}
      rounded={'md'}
      mb={3}
      
    >
      <VStack>
        <Heading
          textTransform={'capitalize'}
          color={'white'}
          fontSize={'xl'}
          mb={1}
          flex={1}
          numberOfLines={1}
        >
          Costas
        </Heading>
        <Text
          color={'gray.100'}
        >
          Puxado Frontal
        </Text>
      </VStack>
      <Text
        color={'gray.100'}
      >08:30</Text>
    </HStack>
  )
}
