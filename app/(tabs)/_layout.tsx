import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Image, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'lastActiveTab';

const HomeHeader = () => (
    <View style={styles.header}>
        <Image source={require('../../assets/icons/pizza_logo.svg')} style={styles.icon} />
        <Image source={require('../../assets/icons/menu.svg')} style={styles.icon} />
    </View>
);

export default () => {
    const [initialTab, setInitialTab] = useState('home');

    useEffect(() => {
        (async () => {
            const savedTab = await AsyncStorage.getItem(STORAGE_KEY);
            if (savedTab) {
                setInitialTab(savedTab);
            }
        })();
    }, []);

    const handleTabChange = async (tabName: string): Promise<void> => {
        await AsyncStorage.setItem(STORAGE_KEY, tabName);
    };

    return (
        <Tabs
            initialRouteName={initialTab}
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor: '#FF0000',
                tabBarInactiveTintColor: '#000',
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    header: HomeHeader,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/homeR.svg')
                                    : require('../../assets/icons/homeB.svg')
                            }
                            style={[styles.tabIcon, focused && styles.tabIconActive]}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="panier"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/panierR.svg')
                                    : require('../../assets/icons/panierB.svg')
                            }
                            style={[styles.tabIcon, focused && styles.tabIconActive]}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/historyR.svg')
                                    : require('../../assets/icons/historyB.svg')
                            }
                            style={[styles.tabIcon, focused && styles.tabIconActive]}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={
                                focused
                                    ? require('../../assets/icons/userB.svg')
                                    : require('../../assets/icons/userB.svg')
                            }
                            style={[styles.tabIcon, focused && styles.tabIconActive]}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    tabBar: {
        backgroundColor: '#fff',
        height: 45, // Adjusted height
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
    tabIconActive: {
        tintColor: '#FF0000',
    },
    icon: {
        width: 30,
        height: 30, // Adjusted height
        paddingTop: 5,
    },
});
