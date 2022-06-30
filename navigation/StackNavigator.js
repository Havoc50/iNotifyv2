import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import SeeNotes from '../screens/SeeNotes';
import SeeTasks from '../screens/SeeTasks';
import SeeEvents from '../screens/SeeEvents';
import SeeReminders from '../screens/SeeReminders';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SeeNotes" component={SeeNotes} />
      <Stack.Screen name="SeeTasks" component={SeeTasks} />
      <Stack.Screen name="SeeEvents" component={SeeEvents} />
      <Stack.Screen name="SeeReminders" component={SeeReminders} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
