import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

const CustomTabButton = (props) => (
    <Pressable
      {...props}
      android_ripple={{ color: 'transparent' }} 
      style={({ pressed }) => [
        props.style,
        { opacity: pressed ? 0.8 : 1 }, 
      ]}
    />
  );

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false,
        tabBarActiveTintColor:Colors.PRIMARY,
        tabBarButton: (props) => <CustomTabButton {...props} />,
    }}>
        <Tabs.Screen name='home' options={{
            tabBarLabel:"home", 
            tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
            }}/>
        <Tabs.Screen name='explore' options={{
            tabBarLabel:"home", 
            tabBarIcon:({color})=><Ionicons name="search" size={24} color={color} />
            }}/>
        <Tabs.Screen name='profile' options={{
            tabBarLabel:"home", 
            tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />
            }}/>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})