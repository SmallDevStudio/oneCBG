import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1 h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}
      >
        <View className="flex-1 items-center justify-center bg-gray-200">
          <Text className="text-2xl font-ttbBold">One BBG</Text>
          <StatusBar style="auto" />
          <Link href="/home" style={{ color: 'blue' }}>Go to Home</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

