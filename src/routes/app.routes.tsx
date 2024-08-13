import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Exercise } from '@screens/exercise'
import { History } from '@screens/history'
import { Home } from '@screens/home'
import { Profile } from '@screens/profile'

import HistorySvg from '@assets/history.svg'
import HomeSvg from '@assets/home.svg'
import ProfileSvg from '@assets/profile.svg'

import { Platform } from 'react-native'
import { gluestackUIConfig } from '../../config/gluestack-ui.config'

type AppRoutes = {
  home: undefined
  exercise: undefined
  history: undefined
  profile: undefined
}

type NameRoutes = 'home' | 'exercise' | 'history' | 'profile'

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>

type ScreenProps = {
  name: NameRoutes
  component: React.ComponentType
  options?: BottomTabNavigationOptions
}

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

const { tokens } = gluestackUIConfig
const iconSize = tokens.space['6']

const screens: ScreenProps[] = [
  {
    name: 'home',
    component: Home,
    options: {
      tabBarIcon: ({ color }) => (
        <HomeSvg fill={color} width={iconSize} height={iconSize} />
      ),
    },
  },
  {
    name: 'history',
    component: History,
    options: {
      tabBarIcon: ({ color }) => (
        <HistorySvg fill={color} width={iconSize} height={iconSize} />
      ),
    },
  },
  {
    name: 'profile',
    component: Profile,
    options: {
      tabBarIcon: ({ color }) => (
        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
      ),
    },
  },
  {
    name: 'exercise',
    component: Exercise,
    options: {
      tabBarButton: () => null,
    },
  },
]

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.green500,
        tabBarInactiveTintColor: tokens.colors.gray200,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray600,
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: tokens.space['10'],
          paddingTop: tokens.space['6'],
        },
      }}
    >
      {screens.map(({ name, ...rest }) => {
        return <Screen key={name} name={name} {...rest} />
      })}
    </Navigator>
  )
}
