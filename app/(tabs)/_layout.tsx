import { Tabs } from 'expo-router';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home"  />
            <Tabs.Screen name="panier"/>
            <Tabs.Screen name="historique" />
            <Tabs.Screen name="profile"  />
        </Tabs>
    );
}