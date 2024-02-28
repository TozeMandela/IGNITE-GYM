import React from 'react'

import { Input  as InputNB, IInputProps, FormControl, Text} from 'native-base'

type IpropsInput = IInputProps & {
  errMessage?: string
}

export function Input({errMessage, ...rest}: IpropsInput) {
  const invalid = !!errMessage;
  
  return (
    <FormControl 
      isInvalid={invalid}
      mb={4}
      
    >
    <InputNB 
        bgColor="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        color={'white'}
        fontFamily={'body'}
        fontSize={'md'}
        {...rest}
        placeholderTextColor={'gray.200'}
        _focus={{
          backgroundColor: 'gray.700',
          borderWidth: 2,
          borderColor: 'green.300',
        }}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
    />

    <FormControl.ErrorMessage>
        <Text fontSize={'md'}>{errMessage}</Text>
    </FormControl.ErrorMessage>
    </FormControl>
  )
}
