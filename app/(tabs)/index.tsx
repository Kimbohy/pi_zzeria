import React from 'react';
import { StyleSheet } from 'react-native';
import  LivraisonScreen  from '@/components/ui/livraison/LivraisonScreen';
import { ScrollView , View } from 'react-native';

export default function HomeScreen() {
  const user = {
    name: 'Marvis Kparobo',
    address: 'Km 5 refinery road opposite re public road, efferum, delta state',
    telephone: '+234 9011039271',
    totalPrice: 24000
  }
  return (
    <ScrollView>
      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LivraisonScreen 
          userName={user.name} 
          userAddress={user.address} 
          userTelephone={user.telephone} 
          totalPrice={user.totalPrice}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
