import { ExercicyCard } from '@components/Exercicie/ExercicyCard';
import { Group } from '@components/Group/Group';
import { HomeHeader } from '@components/HomeHeader/HomeHeader'
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'
import React, { useState } from 'react'

export function Home() {
  const [groups, setGroups] = useState(['costas', 'ombros', 'biceps', 'Triceps', 'pé'])
  const [active, setActive] = useState('costas');

  return (
    <VStack>
      <HomeHeader/>
      <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({item})=>(
                <Group
                text={item}
                isActive={active === item}
                onPress={()=>setActive(item)}
                />
                )}
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{px: 8}}
            my={10}
            maxH={10}
        />

        <VStack px={8}>

          <HStack px={2} justifyContent={'space-between'} mb={5}>
                <Heading
                  color={'gray.200'}
                  fontSize={'md'}
                  >
                    Exercices
                </Heading>
                <Text
                  color={'gray.200'}
                  >
                    4
                </Text>
          </HStack>

            <ExercicyCard
              title='Flexões de braço' 
              description='3 Série x 12 repetições'
              />


        </VStack>
    </VStack>
  )
}
