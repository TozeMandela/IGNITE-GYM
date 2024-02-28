
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { VStack, Text, ScrollView, Center, Skeleton, Heading } from 'native-base'


import { ScrennHeader } from '@components/ScreensHeader/ScrennHeader'
import { UserPhoto } from '@components/userPhotos/UserPhoto'
import { TouchableOpacity } from 'react-native'
import { Input } from '@components/Input/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoader, setPhotoIsLoader] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string>('https://github.com/TozeMandela.png');

  const handleUserPhotoSelect = async () => {
    setPhotoIsLoader(true);
    try {
        const photo = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4,4],
        allowsEditing: true
      });

      if(photo.canceled){
        return null;
      }

      if(photo.assets[0].uri)
        setUserPhoto(photo.assets[0].uri)

    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }finally{
      setPhotoIsLoader(false);
    }
    
  }

  return (
    <VStack flex={1}>
      <ScrennHeader 
        title='Profile'
      />
      <ScrollView
        px={8}
      >
        <Center>
         {photoIsLoader ? <Skeleton 
          h={PHOTO_SIZE}
          w={PHOTO_SIZE}
          rounded={'full'}
          startColor={'gray.500'}
          endColor={'gray.300'}
          /> :
          <UserPhoto
            size={PHOTO_SIZE}
            source={{uri: userPhoto}}
            alt='perfil'
          />}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color={'green.500'}
              fontSize={'md'}
              fontWeight={'bold'}
              mt={2}
              mb={8}
            >Alterar foto</Text>
          </TouchableOpacity>

            
          <Input
            bgColor={'gray.600'}
            placeholder='Tozé Mandela'
          />
          <Input
            value='mandelajunior10@gmail.com'
            isDisabled
            _disabled={{
              backgroundColor: 'none',
              color: 'white',
              bgColor: 'gray.400',
            }}
          />

          
        </Center>

       <VStack
        py={10}
       >
            <Heading
              color={'white'}
              fontSize={'md'}
              mb={2}
            >
              Alterar senha
            </Heading>


          <Input
            bgColor={'gray.600'}
            placeholder='senha anterior'
            secureTextEntry
          />

          <Input
            bgColor={'gray.600'}
            placeholder='nova senha'
            secureTextEntry
          />

          <Input
            bgColor={'gray.600'}
            placeholder='confirmar nova senha'
            secureTextEntry
          />

        <Button
            text='Actualizar'
            width={'100%'}
          />
       </VStack>
      </ScrollView>
    </VStack>
  )
}
