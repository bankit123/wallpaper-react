import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function box({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.texts}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 50, backgroundColor: "green" },
  texts : {color:"white"}
});
