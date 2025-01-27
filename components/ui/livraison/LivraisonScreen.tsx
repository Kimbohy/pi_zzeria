import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface LivraisonScreenProps {
  userName: string;
  userAddress: string;
  userTelephone: string;
  totalPrice: number;
};

export default function LivraisonScreen({ userName, userAddress, userTelephone, totalPrice }: LivraisonScreenProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>("Livraison à domicile");
  const [selectedAddress, setSelectedAddress] = useState<string>(userAddress);
  const [selectedPhone, setSelectedPhone] = useState<string>(userTelephone);
  const [selectedName, setSelectedName] = useState<string>(userName);
  const [selectedTotalPrice, setSelectedTotalPrice] = useState<number>(totalPrice);

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [tempNom, setTempNom] = useState<string>(userName);
  const [tempAddress, setTempAddress] = useState<string>(userAddress);
  const [tempPhone, setTempPhone] = useState<string>(userTelephone);

  const handleConfirm = () => {
    console.log("Commande confirmée avec méthode :", selectedMethod);
    console.log("Adresse de livraison :", selectedAddress);
    console.log("Téléphone :", selectedPhone);
    console.log("Nom :", selectedName);
    console.log("Prix total :", selectedTotalPrice);
  };

  const handleSave = () => {
    // Enregistrer les modifications
    setModalVisible(false);
    setSelectedAddress(tempAddress);
    setSelectedPhone(tempPhone);
  };

  useEffect(() => {
    if (selectedAddress === tempAddress && selectedPhone === tempPhone) {
      setModalVisible(false);
    }
  }, [selectedAddress, selectedPhone, tempAddress, tempPhone]);

  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <TouchableOpacity>
         <Ionicons name="arrow-back" size={24} color="black" />
       </TouchableOpacity>
       <Text style={styles.headerTitle}>Commandes</Text>
     </View>
      <Text style={{fontSize: 34, fontWeight: "bold", marginBottom: 20}}>Livraison</Text>
      <View style={styles.section}>
        <View>
            <Text style={styles.sectionTitle} >Adresse</Text>
            <Text style={styles.modify} onPress={() => setModalVisible(true)}>Modifier</Text>            
        </View>
        
        <View style={styles.addressBox}>
          <Text style={styles.name} onPress={() => setModalVisible(true) }>{selectedName}</Text>
          
          <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10}}></View>

          <Text style={styles.address} onPress={() => setModalVisible(true)}>
            {selectedAddress}
          </Text>

          <View style={{borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 10}}></View>

          <Text style={styles.phone}  onPress={() => setModalVisible(true)}>{selectedPhone}</Text>
        </View>
      </View>
        
    <Text style={styles.sectionTitle}>Méthodes</Text>
      <View style={[styles.section, styles.addressBox]}>
        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedMethod("Livraison à domicile")}
        >
          <View
            style={[
              styles.radioCircle,
              selectedMethod === "Livraison à domicile" && styles.radioSelected,
            ]}
          />
          <Text style={styles.radioText}>Livraison à domicile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioOption}
          onPress={() => setSelectedMethod("À récupérer")}
        >
          <View
            style={[
              styles.radioCircle,
              selectedMethod === "À récupérer" && styles.radioSelected,        
            ]}
          />
          <Text style={styles.radioText}>À récupérer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>{selectedTotalPrice}Ar</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmer</Text>
      </TouchableOpacity>
      {/* Boîte de dialogue pour modifier les informations */}
       <Modal
         visible={isModalVisible}
         transparent={true}
         animationType="slide"
         onRequestClose={() => setModalVisible(false)}
       >
         <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
             <Text style={styles.modalTitle}>Modifier les informations</Text>
             <Text style={{width: "100%", fontWeight: "bold", marginBottom: 2}}>Nom</Text>
             <TextInput
               style={styles.input}
               placeholder="Nouveau nom"
               value={tempNom}
               onChangeText={setTempNom}
             />

             <Text style={{width: "100%", fontWeight: "bold", marginBottom: 2}}>Adresse</Text>
             <TextInput
               style={styles.input}
               placeholder="Nouvelle adresse"
               value={tempAddress}
               onChangeText={setTempAddress}
             />

             <Text style={{width: "100%", fontWeight: "bold", marginBottom: 2}}>Téléphone</Text> 
             <TextInput
               style={styles.input}
               placeholder="Nouveau téléphone"
               value={tempPhone}
               onChangeText={setTempPhone}
               keyboardType="phone-pad"
             />
             <View style={styles.modalButtons}>
               <TouchableOpacity
                 style={[styles.modalButton, {backgroundColor: "black"} ]}
                 onPress={() => setModalVisible(false)}
               >
                 <Text style={styles.modalButtonText}>Annuler</Text>
               </TouchableOpacity>
               <TouchableOpacity 
                 style={[styles.modalButton, {backgroundColor: "#e52e2e"} ]}
                 onPress={handleSave}
                >
                 <Text style={styles.modalButtonText}>Enregistrer</Text>
               </TouchableOpacity>
             </View>
           </View>
         </View>
       </Modal> 

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        padding: 20,
        minWidth: "100%"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
    },
    headerTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "#000",
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modify: {
        color: "#e52e2e",
        position: "absolute",
        right: 0,
        fontWeight: "bold",
    },
    addressBox: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
        elevation: 3,
        flexDirection: "column",
        gap: 3,
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    address: {
        color: "#555",
        marginBottom: 5,
    },
    phone: {
        color: "#555",
    },
    radioOption: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#000",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    radioSelected: {
        backgroundColor: "#e52e2e",
    },
    radioText: {
        fontSize: 16,
    },
    totalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    totalText: {
        fontSize: 18,
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
    },
    confirmButton: {
        backgroundColor: "#e52e2e",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    confirmButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: "#FFF",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    modalButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      width: "100%",
    },
    modalButton: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
      alignItems: "center",
    },
    modalButtonText: {
      color: "#FFF",
      fontWeight: "bold",
    },

});
