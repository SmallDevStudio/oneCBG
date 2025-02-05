import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "ttb-Regular": require("../assets/fonts/ttb-Regular.ttf"),
        "ttb-Bold": require("../assets/fonts/ttb-Bold.ttf"),
    });

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded]);

    if(!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

