import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'native-base';

import { AuthRoutes } from "./auth/auth.routes";
import { AppRutes } from "./app/app.routes";





export function Routes () {

    const NBTheme = useTheme();
    const theme = DefaultTheme;

    theme.colors.background = NBTheme.colors.gray[700];

    return (
        <NavigationContainer theme={theme}>
            <AuthRoutes />
        </NavigationContainer>
    )
}