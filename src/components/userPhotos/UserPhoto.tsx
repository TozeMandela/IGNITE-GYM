import { Image } from 'native-base'
import React from 'react'
import { ImageProps } from 'react-native'

type Iprops = ImageProps & {
    size: number
}

export function UserPhoto({size, ...rest}: Iprops) {
  return (
    <Image 
        w={size}
        h={size}
        rounded={'full'}
        borderColor={'gray.400'}
        borderWidth={2}
        {...rest}
    />
      
  )
}
