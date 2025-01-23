import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'lastActiveTab';

export default () => {
    const [initialTab, setInitialTab] = useState('home');

    // Load the active tab at startup
    useEffect(() => {
        (async () => {
            const savedTab = await AsyncStorage.getItem(STORAGE_KEY);
            if (savedTab) {
                setInitialTab(savedTab);
            }
        })();
    }, []);

    // Save the active tab when the user changes it
    interface TabPressEvent {
        route: {
            name: string;
        };
    }

    const handleTabChange = async (tabName: string): Promise<void> => {
        await AsyncStorage.setItem(STORAGE_KEY, tabName);
    };

    return (
        <Tabs initialRouteName={initialTab}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            width={size}
                            height={size}
                            source={
                                focused
                                    ? require('../../assets/icons/homeR.svg') // Red icon when focused
                                    : require('../../assets/icons/homeB.svg') // Black icon when not focused
                            }
                        />
                    ),
                    tabBarLabel: () => null, // Remove the label
                }}
            />
             <Tabs.Screen
                name="panier"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            width={size}
                            height={size}
                            source={
                                focused
                                    ? require('../../assets/icons/panierR.svg') 
                                    : require('../../assets/icons/panierB.svg')
                            }
                        />
                    ),
                    tabBarLabel: () => null, 
                }}
            />
           <Tabs.Screen
                name="history"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            width={size}
                            height={size}
                            source={
                                focused
                                    ? require('../../assets/icons/historyR.svg')
                                    : require('../../assets/icons/historyB.svg')
                            }
                        />
                    ),
                    tabBarLabel: () => null, 
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            width={size}
                            height={size}
                            source={
                                focused
                                    ? require('../../assets/icons/homeR.svg')
                                    : require('../../assets/icons/userB.svg')
                            }
                        />
                    ),
                    tabBarLabel: () => null, 
                }}
            />
        </Tabs>
    );
};