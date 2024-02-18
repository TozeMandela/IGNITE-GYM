import React from 'react'
import { Text } from 'native-base'
import { Pressable, IPressableProps } from 'native-base'



type Iprops = IPressableProps & {
    text: string,
    isActive: boolean,
}

export function Group({text, isActive, ...rest}: Iprops) {
  return (
    <Pressable
        ml={3}
        alignItems={'center'}
        justifyContent={'center'}
        w={24}
        h={10}
        rounded={'md'}
        bg={'gray.600'}
        overflow={'hidden'}
        isPressed= {isActive}
        _pressed={{
            borderColor: 'green.500',
            borderWidth: 2,
        }}
        {...rest}
    >
        <Text
            color={isActive? 'green.500':'gray.200'}
            textTransform={'uppercase'}
            fontSize={'xs'}
            fontWeight={'bold'}
        >
          {text}
        </Text>
    </Pressable>
  )
}
