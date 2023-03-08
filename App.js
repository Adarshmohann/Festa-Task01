
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from './Screens/Toptabs/Bottomtabs/Home';
import More from './Screens/Toptabs/Bottomtabs/More';
import Search from './Screens/Toptabs/Bottomtabs/Search';
import Wishlist from './Screens/Toptabs/Bottomtabs/Wishlist';
import Cart from './Screens/Toptabs/Bottomtabs/Cart';

import Categories from './Screens/Toptabs/Categories';
import MyOLLZ from './Screens/Toptabs/MyOLLZ';

const stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const Bottomtab = createBottomTabNavigator()

function Mystack() {
  return (
    <stack.Navigator>

      <stack.Screen
        name="Mytabs"
        component={Mytabs}
        options={{ headerShown: false }} />


      <stack.Screen
        name="Mybottomtabs"
        component={Mybottomtabs} />


    </stack.Navigator>
  )
}


function Mytabs() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' },
        tabBarScrollEnabled: false,
        tabBarStyle: { backgroundColor: 'white' }
      }}>

      <Tab.Screen
        name="Categories"
        component={Mybottomtabs}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="grid-view" size={22} color='black' /> : <Icon name="grid-view" size={22} color='gray' />
        }}
      />

      <Tab.Screen
        name="MyOLLZ"
        component={Mybottomtabs}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="person" size={22} color='black' /> : <Icon name="person" size={22} color='gray' />
        }}
      />

    </Tab.Navigator>

  )
}


function Mybottomtabs() {
  return (

    <Bottomtab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: 'white' }
      }}>

      <Bottomtab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="home" size={22} color='black' /> : <Icon name="home" size={22} color='gray' />
        }}
      />

      <Bottomtab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="search" size={22} color='black' /> : <Icon name="search" size={22} color='gray' />

        }} />

      <Bottomtab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="shopping-cart" size={22} color='black' /> : <Icon name="shopping-cart" size={22} color='gray' />
        }} />

      <Bottomtab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="redeem" size={22} color='black' /> : <Icon name="redeem" size={22} color='gray' />
        }} />

      <Bottomtab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name="menu" size={22} color='black' /> : <Icon name="menu" size={22} color='gray' />
        }} />

    </Bottomtab.Navigator>

  )
}


function App() {
  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  )
}

export default App

