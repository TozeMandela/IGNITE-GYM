import React from 'react'
import { Button as ButtonNB, Center,  IButtonProps, Text} from 'native-base'

type props =  IButtonProps & {
    text: string
    variant?: 'solid' | 'outline'
}

export function Button({text, variant = 'solid', ...rest}: props) {
  return (
    <Center >
        <ButtonNB 
            {...rest}
            h={14}
            rounded={'sm'}
            bg={variant === 'outline' ? 'transparent':'green.700'}
            borderWidth={variant === 'outline' ? 1:0}
            borderColor={variant === 'outline' ? 'green.500':'gray.100'}
            borderRadius={'sm'}
            mb={4}
            _pressed={{
                backgroundColor: variant === 'outline' ? 'gray.500':'green.500',
            }}
        >
            <Text
                color={variant === 'outline' ? 'green.500':'gray.100'}
                fontSize={'sm'}
                fontFamily={'heading'}
            >
                {text}
            </Text>
        </ButtonNB>
    </Center>
  )
}
