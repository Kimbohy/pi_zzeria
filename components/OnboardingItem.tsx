import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

interface OnboardingItemProps {
  item: any; // Replace 'any' with the appropriate type if known
}

export default function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <View style={[styles.container, { width }]}>
      <View>
        <Image
          source={item.image}
          style={[styles.image, { width: width - 50, resizeMode: "contain" }]}
        />
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    padding: 10,
    flex: 0.7,
    justifyContent: "center",
    //paddingHorizontal: 64,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 7,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#777",
    paddingHorizontal: 10,
  },
});
