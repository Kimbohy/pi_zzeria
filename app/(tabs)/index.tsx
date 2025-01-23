import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import  LivraisonScreen  from '@/components/ui/livraison/LivraisonScreen';
import { View } from 'react-native';

export default function HomeScreen() {
  const user = {

  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LivraisonScreen userName='Marvis Kparobo' userAddress='Km 5 refinery road opposite re public road, efferum, delta state' userTelephone='+234 9011039271' totalPrice={24000}/>
    </View>
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
