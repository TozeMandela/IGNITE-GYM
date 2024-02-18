import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import {Account} from '@screens/CreateAccount'
import {Signin} from '@screens/Signin'
import { Box } from 'native-base';

const { Navigator, Screen} = createNativeStackNavigator<authProps>();

type authProps = {
    Signin: undefined,
    Account: undefined
}

export type AuthNavigateRoutesProps = NativeStackNavigationProp<authProps>;

export function AuthRoutes () {
    return (
        <Box flex={1} bg={'gray.700'} >
            
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='Signin' component={Signin} />
                <Screen name="Account" component={Account} />
            </Navigator>
        </Box>
    )
}