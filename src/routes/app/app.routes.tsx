import React from 'react'
import { createBottomTabNavigator,  } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';
import { Exercicie } from '@screens/Exercicies';

import HomeIcon from '@assets/home.svg';
import HistoryIcon from '@assets/history.svg';
import ProfileIcon from '@assets/profile.svg';
import { useTheme } from 'native-base';



type IpropsAppRoutes = {
    Home: undefined,
    Exercicie: undefined,
    History: undefined,
    Profile: undefined,
}

const { Navigator, Screen } = createBottomTabNavigator<IpropsAppRoutes>();



export function AppRutes() {
 const { colors, sizes } = useTheme();

 const size = sizes[8]
  return (
    <Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
            backgroundColor: colors.gray[600],
            borderTopWidth: 0, 
        }


        }}>
      <Screen 
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
            <HomeIcon fill={color} width={size} height={size}/>
        )
      }}
      />
      <Screen 
        name='History'
        component={History}
        options={{
            tabBarIcon: ({ color }) => (
                <HistoryIcon fill={color} width={size} height={size}/>
            )
          }}
      />
      <Screen 
        name='Profile'
        component={Profile}
        options={{
            tabBarIcon: ({ color }) => (
                <ProfileIcon fill={color} width={size} height={size}/>
            )
          }}
      />
      <Screen 
        name='Exercicie'
        component={Exercicie}
        options={{
            tabBarButton: ()=> null,
        }}
        
      />
      
     
    </Navigator>
  )
}
