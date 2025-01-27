import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <Image
        source={require('@/assets/fonts/back.png')} // Remplace par ton image de fond
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Contenu de la page */}
      <View style={styles.content}>
        {/* Conteneur du logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')} // Remplace par ton logo
            style={styles.logo}
          />
        </View>

        {/* Titre */}
        <Text style={styles.title}>Créer votre compte</Text>

        {/* Champs de formulaire */}
        <TextInput
          placeholder="Nom d'utilisateur"
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail ou numéro"
          style={styles.input}
        />
        <TextInput
          placeholder="Adresse"
          style={styles.input}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry
          style={styles.input}
        />

        {/* Bouton Enregistrer */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Remplit tout l'écran
  
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,// Coins arrondis
  
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.58)', // Fond semi-transparent
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 20, // Coins arrond
    marginTop: 50,
    marginBottom: 20, // Espacement avec le bouton
  },

  logoContainer: {
    width: 150, // Largeur du cercle
    height: 150, // Hauteur du cercle
    borderRadius: 75, // Rend le conteneur circulaire
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fond blanc transparent
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // Espacement avec le titre
  
  },

  logo: {
    flex: 1, // Remplit le conteneur
    justifyContent: 'center',
    alignItems: 'center',
    width: 230, // Taille du logo
    height: 230, // Taille du logo
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1, // Ligne fine en bas
    marginBottom: 20,
    fontSize: 14,
  },

  button: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
