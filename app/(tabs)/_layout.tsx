import { Tabs } from 'expo-router';

import CartIconR from '../../assets/icons/panierR.svg';
import CartIconB from '../../assets/icons/panierB.svg';
import HomeIconR from '../../assets/icons/homeR.svg';
import HomeIconB from '../../assets/icons/homeB.svg';
import UserIconR from '../../assets/icons/userR.svg';
import UserIconB from '../../assets/icons/userB.svg';
import HistoryIconB from '../../assets/icons/historyB.svg';
import HistoryIconR from "../../assets/icons/historyR.svg";

export default () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeIconB width={size} height={size} fill={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="panier"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <CartIconR width={size} height={size} fill={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="historique" 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HistoryIconB width={size} height={size} fill={color} />
                    ),
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <UserIconB width={size} height={size} fill={color} />
                    ),
                }}
            />
        </Tabs>
    );
}