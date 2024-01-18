import { Spinner, Center } from 'native-base'
import React from 'react'

export function Loader() {
  return (
    <Center flex={1} bgColor={"gray.700"}>
      <Spinner color="green.500" />
    </Center>
  )
}
