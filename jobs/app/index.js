import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants'; 

const Home = () =>{
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:COLORS.lightWhite }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimesnsion="60%"/>
                    ),
                    headerRight: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimesnsion="100%"/>
                    ),
                }}
            />
        </SafeAreaView>
    )
}

export default Home;