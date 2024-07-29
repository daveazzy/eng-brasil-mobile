import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { Home} from '../home';
import { Favorites } from '../favorites';
import { Profile } from '../profile';

import HomeSvg from '../../assets/bottomTab/house-simple.svg';
import FavSvg from '../../assets/bottomTab/heart-straight.svg';
import UserSvg from '../../assets/bottomTab/user.svg';
import { Platform } from 'react-native';

type AppRoutes = {
    home: undefined;
    favorites: undefined;
    profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const {COLORS } = useTheme();

    return (
        <Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel:true,
                tabBarActiveTintColor: COLORS.BLUE,
                tabBarInactiveTintColor: COLORS.GREY_TB,
                tabBarStyle: {
                    height: Platform.OS === 'android' ? 80 : 96,
                    paddingBottom: 10,
                    paddingTop: 6
                }
            }}
        >

            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <HomeSvg 
                            fill={color}                        
                        />
                    ),
                    tabBarLabel: 'Início'
                }}
            />
            <Screen
                name='favorites'
                component={Favorites}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FavSvg
                            fill={color} 
                        />
                    ),
                    tabBarLabel: 'Favoritos'
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <UserSvg
                            fill={color} 
                        />
                    ),
                    tabBarLabel: 'Perfil'
                }}
            />

        </Navigator>
    )
}