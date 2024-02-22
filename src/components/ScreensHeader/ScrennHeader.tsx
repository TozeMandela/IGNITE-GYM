import React from 'react'
import { Center, Heading, VStack } from 'native-base'

interface Props {
    title: string,
}

export function ScrennHeader({title}: Props) {
  return (
      <Center 
        pt={16} 
        pb={8}
        bg={'gray.600'}
        mb={16}
        >
        <Heading 
            color={'gray.100'}
            fontSize={'xl'}    
            fontFamily={'heading'}
        > 
        {title}
        </Heading>
      </Center>
  )
}
