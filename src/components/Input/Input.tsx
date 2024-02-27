import React from 'react'

import { Input  as InputNB, IInputProps} from 'native-base'

export function Input({...rest}: IInputProps) {
  return (
    <InputNB 
        bgColor="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        color={'white'}
        fontFamily={'body'}
        fontSize={'md'}
        mb={4}
        {...rest}
        placeholderTextColor={'gray.200'}
        _focus={{
          backgroundColor: 'gray.700',
          borderWidth: 2,
          borderColor: 'green.300',
        }}
    />
  )
}
