import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MenuBar from './MenuBar';

const Header = () => {
  return (
    <View className="flex bg-[#002B7F] p-14 rounded-3xl">
      <MenuBar />
      <View className="flex flex-row justify-between items-center">
        <Text className="text-white font-ttbBold text-3xl">
            Hi, User {'\n'}
            <Text className="text-white font-ttbBold text-xl">Welcome to OneBBG</Text>
        </Text>
        <Image source={{
            uri: 'https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg'
        }} className="w-24 h-24 rounded-full object-contain" />
      </View>
    </View>
  )
}

export default Header