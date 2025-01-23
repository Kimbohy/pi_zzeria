import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Image, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgXml } from 'react-native-svg';

const STORAGE_KEY = 'lastActiveTab';

const HomeHeader = () => (
    <View style={styles.header}>
        <Image source={require('../../assets/icons/pizza_logo.svg')} width={30} height={30} />
        <Image source={require('../../assets/icons/menu.svg')} width={30} height={30} />
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
        <Tabs initialRouteName={initialTab}>
            <Tabs.Screen
                name="home"
                options={{
                    header: HomeHeader,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            width={size}
                            height={size}
                            source={
                                focused
                                    ? require('../../assets/icons/homeR.svg')
                                    : require('../../assets/icons/homeB.svg')
                            }
                        />
                    ),
                    tabBarLabel: () => null,
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
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});