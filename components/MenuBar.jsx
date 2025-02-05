import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, Octicons } from '@expo/vector-icons';

const MenuBar = () => {
  return (
    <View className="flex flex-row items-center justify-end mb-4 w-full gap-6">
        <Octicons name="search" size={24} color="white" />
        <Ionicons name="menu" size={30} color="white" />
    </View>
  )
}

export default MenuBar

const styles = StyleSheet.create({})