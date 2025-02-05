import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = () => {
  return (
    <View className="flex-1 bg-[#f5f5f5]">
      <Header />
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})