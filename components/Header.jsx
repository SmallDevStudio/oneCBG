import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MenuBar from './MenuBar';
import HeaderIcons from './HeaderIcons';

const Header = () => {
    const menuItems = [
        { icon: 'megaphone-outline', label: 'Promote' },
        { icon: 'bulb-outline', label: 'Favorites' },
        { icon: 'trophy-outline', label: 'Profile' },
        { icon: 'chatbubble-outline', label: 'Add' },
      ];
  return (
    <View className="flex flex-col bg-[#002B7F] p-10 rounded-b-[50px]">
      <MenuBar />
      <View className="flex flex-row justify-between items-center">
        <Text className="text-white font-promptBold text-[35px]">
            Hi, Saranya {'\n'}
            <Text className="text-white font-promptBold text-lg">Welcome to OneBBG</Text>
        </Text>
        <Image source={{
            uri: 'https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg'
        }} className="w-20 h-20 rounded-full object-contain" />
      </View>
      <View className="flex mt-5">
        <HeaderIcons menuItems={menuItems} />
      </View>
    </View>
  )
}

export default Header;