import React, { useState } from 'react';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base'

import { Group } from '@components/Group/Group';
import { HomeHeader } from '@components/ScreensHeader/HomeHeader'
import { ExercicyCard, PropsexercicieCard } from '@components/Exercicie/ExercicyCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigateRoutesProps } from '@routes/app/app.routes';



export function Home() {
  const { navigate } = useNavigation<AppNavigateRoutesProps>()
  const [groups, setGroups] = useState(['costas', 'ombros', 'biceps', 'Triceps', 'pé']);
  const [active, setActive] = useState('costas');

  const [exercicie, setExercicie] = useState<PropsexercicieCard[]>([{title: 'Flexões de braço', description:  '3 Série x 12 repetições', imgURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicJ9g2znB6RyEbFcGhgjEYsA9tlRJOFIKw&usqp=CAU'},{title: 'Flexões de braço', description:  '3 Série x 12 repetições', imgURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicJ9g2znB6RyEbFcGhgjEYsA9tlRJOFIKw&usqp=CAU'},{title: 'Flexões de braço', description:  '3 Série x 12 repetições', imgURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicJ9g2znB6RyEbFcGhgjEYsA9tlRJOFIKw&usqp=CAU'}, {title: 'Flexões de braço', description:  '3 Série x 12 repetições', imgURI: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKicJ9g2znB6RyEbFcGhgjEYsA9tlRJOFIKw&usqp=CAU'}])


  const HandleExercicie = ()=>{
    navigate('Exercicie');
  }

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
            minH={10}
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
                    {exercicie.length}
                </Text>
          </HStack>

              <FlatList 
                data={exercicie}
                keyExtractor={item => item.title}
                renderItem={({item})=> (
                  <ExercicyCard
                    imgURI={item.imgURI}
                    title={item.title}
                    description={item.description}
                    onPress={HandleExercicie}
                  />
                )}
              />


        </VStack>
    </VStack>
  )
}
