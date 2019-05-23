import React from 'react';
import { createDrawerNavigator, createAppContainer} from 'react-navigation';
import SplashScreen from './screens/splash.screen';
import LoginScreen from './screens/login.screen';

const Splash= {
    screen: SplashScreen,
    navigationOptions: {
        header: null
    }
}

const Login= {
    screen: LoginScreen,
    navigationOptions: {
        header: null
    }
}
const RouteConfig = {
    initialRoute: 'Splash'
}
const AppNavigator = createDrawerNavigator({
    Splash: Splash,
    Login: Login
},RouteConfig)

export default createAppContainer(AppNavigator);