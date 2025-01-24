import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";

interface PaginatorProps {
  data: any[];
  scrollX: any;
}

export default function Paginator({ data, scrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#D3D3D3", "#FF0000", "#D3D3D3"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={index}
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 5,
  },
});
