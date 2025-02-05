import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const HeaderIcons = ({ menuItems }) => {
  return (
    <View className="flex flex-col w-full">
      <Text className="text-white text-xl font-promptLight font-light">
        What you would like to find?
      </Text>
      <View className="flex items-center w-full mt-5">
        
          <TouchableOpacity
            
            className="flex flex-row justify-between items-center w-full px-2"
          >
            {menuItems?.map((item, index) => (
                <View key={index} className="flex bg-white p-2 w-14 h-14 items-center justify-center" style={{ borderRadius: 30 }}>
                    <Ionicons name={item.icon} size={32} color="black" />
                </View>
            ))}
          </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default HeaderIcons

const styles = StyleSheet.create({})