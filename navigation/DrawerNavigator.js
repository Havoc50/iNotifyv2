import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Notes from '../screens/Notes.js';
import Tasks from '../screens/Tasks.js';
import Events from '../screens/Events.js';
import Reminders from '../screens/Reminders.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notes" component={Notes} />
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Reminders" component={Reminders} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
