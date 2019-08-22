import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import MyMap from '../screens/Map'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
import Profile from '../screens/Profile';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'My List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          // ? `ios-information-circle${focused ? '' : '-outline'}`
          ? `ios-list`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const MapStack = createStackNavigator(
  {
    Maps: MyMap,
  },
  config
);

MapStack.navigationOptions = {
  tabBarLabel: 'Dessert Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-ice-cream' : 'md-map'} />
  ),
};


MapStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Me!',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-options'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ProfileStack,
  MapStack,
  HomeStack,

});

tabNavigator.path = '';

export default tabNavigator;
