import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "ttbRegular": require("../assets/fonts/ttb-Regular.ttf"),
        "ttbBold": require("../assets/fonts/ttb-Bold.ttf"),
        "promptRegular": require("../assets/fonts/Prompt/Prompt-Regular.ttf"),
        "promptBold": require("../assets/fonts/Prompt/Prompt-Bold.ttf"),
        "promptSemiBold": require("../assets/fonts/Prompt/Prompt-SemiBold.ttf"),
        "promptMedium": require("../assets/fonts/Prompt/Prompt-Medium.ttf"),
        "promptLight": require("../assets/fonts/Prompt/Prompt-Light.ttf"),
        "promptExtraLight": require("../assets/fonts/Prompt/Prompt-ExtraLight.ttf"),
        "promptThin": require("../assets/fonts/Prompt/Prompt-Thin.ttf"),
        "promptExtraBold": require("../assets/fonts/Prompt/Prompt-ExtraBold.ttf"),
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

