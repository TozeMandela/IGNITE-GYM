import React from 'react'
import { Container } from './styled'
import { Text, View } from 'react-native'
import { useTheme } from 'native-base'

export function Home() {
const theme = useTheme();

  return (
    
      <Container style={{backgroundColor: theme.colors.gray[700]}}>
          <Text > Mandela ... </Text>
      </Container>
  )
}
