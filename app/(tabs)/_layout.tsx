import { Tabs } from 'expo-router';
import { Image } from 'react-native';


export default () => {
    return (
        <Tabs initialRouteName="home">
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image 
                            width={size} 
                            height={size} 
                            source={focused 
                                ? require('../../assets/icons/homeR.svg')
                                : require('../../assets/icons/homeB.svg')
                            }
                            />
                    ),
                }}
            />
            <Tabs.Screen 
                name="panier"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image 
                            width={size} 
                            height={size} 
                            source={focused 
                                ? require('../../assets/icons/panierR.svg')
                                : require('../../assets/icons/panierB.svg')
                            }
                            />
                    ),
                }}
            />
            <Tabs.Screen 
                name="historique" 
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image 
                            width={size} 
                            height={size} 
                            source={focused 
                                ? require('../../assets/icons/historyR.svg')
                                : require('../../assets/icons/historyB.svg')
                            }
                            />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image 
                            width={size} 
                            height={size} 
                            source={focused 
                                ? require('../../assets/icons/userB.svg')
                                : require('../../assets/icons/homeB.svg')
                            }
                            />
                    ),
                }}
            />
        </Tabs>
    );
}