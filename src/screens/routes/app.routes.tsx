import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import { Home} from '../home';
import { Favorites } from '../favorites';
import { Profile } from '../profile';

import HomeSvg from '../../assets/bottomTab/house-simple.svg';
import FavSvg from '../../assets/bottomTab/heart-straight.svg';
import UserSvg from '../../assets/bottomTab/user.svg';

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
                tabBarShowLabel:false,
                tabBarActiveTintColor: COLORS.BLUE,
                tabBarInactiveTintColor: COLORS.GREY_TB,
                tabBarStyle: {
                    height: 80
                }
            }}
        >

            <Screen
                name='home'
                component={Home}
                options={{
                    // tabBarIcon: ({ color }) => (
                    //     <HomeSvg
                    //         fill={color}
                    //     />
                    // ),
                }}
            />
            <Screen
                name='favorites'
                component={Favorites}
                options={{
                    // tabBarIcon: ({ color }) => (
                    //     <FavSvg
                    //         fill={color}
                    //     />
                    // )
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    // tabBarIcon: ({ color }) => (
                    //     <UserSvg
                    //         fill={color}
                    //     />
                    // )
                }}
            />

        </Navigator>
    )
}