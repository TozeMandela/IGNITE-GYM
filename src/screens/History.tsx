import React, { useState } from 'react'

import { Heading, VStack , SectionList, Center, Text, View} from 'native-base';


import { ScrennHeader } from '@components/ScreensHeader/ScrennHeader'
import { HistoryCard } from '@components/historyCard/HistoryCard'
import { border } from 'native-base/lib/typescript/theme/styled-system';

export function History() {
  const [exercicies, setExercicies] = useState([
    {
      title: '02/02/2024',
      data: [
        {title: 'costas', description: 'Puxado frontal'}, 
        {title: 'perna', description: 'Puxado frontal'},
      ]
    },
    {
      title: '16/01/2024',
      data: [
        {title: 'costas', description: 'Puxado frontal'}, 
      ]
    }
  ])


  return (
    <VStack flex={1}> 
      <ScrennHeader title='History of exercicie'/>

      <SectionList 
        sections={exercicies}
        keyExtractor={item => item.title}
        renderItem={({item})=> (
          <HistoryCard />
        )}

        renderSectionHeader={({section}) => (
          <Heading
            color={'gray.100'}
            fontSize={'md'}
            ml={6}
            py={6}
          >{section.title}</Heading>
        )}

        contentContainerStyle={exercicies.length === 0 && {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}

        ListEmptyComponent={()=>(
            <Text 
              color={'gray.100'}
              alignItems={'center'} 
              justifyContent={'center'}>Não há exercicios registrados
            </Text>
        )}
        
      />
    </VStack>
  )
}
