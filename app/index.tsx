import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  GestureResponderEvent,
} from "react-native";
import Onboarding from "@/components/Onboarding";
import { StatusBar } from "expo-status-bar";
interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#fff",
  textColor = "#000",
}) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);
export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>Pizza</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>Malgache</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerItem}>
        <Onboarding />
        {/* Buttons Section */}

        <View style={{ paddingHorizontal: 10 }}>
          <Button
            title="Log in"
            onPress={() => console.log("Log in pressed")}
            backgroundColor="#ff0000"
            textColor="#fff"
          />
          <Button
            title="Sign me up"
            onPress={() => console.log("Sign me up pressed")}
            backgroundColor="#f2f2f2"
            textColor="#ff0000"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: Dimensions.get("window").height,
    boxSizing: "content-box",
    backgroundColor: "#fff",
    fontFamily: "Montserrat",
  },
  containerItem: {},
  languageText: {
    fontSize: 14,
    color: "#333",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  languageButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
