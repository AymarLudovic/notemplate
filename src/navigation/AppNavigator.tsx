import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Explore" component={ExploreScreen} />
    <Stack.Screen name="Notifications" component={NotificationsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;