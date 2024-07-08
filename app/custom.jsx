import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function custom({ name }) {
  return (
    <View>
      <View style={[styles.box, styles.bgPink]}>
        <Text>{name}</Text>
      </View>

      <View style={[styles.box, styles.bgblue]}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { color: "pink" },
  box: { height: 100, width: 100 },
  bgPink: { backgroundColor: "pink" },
  bgblue: { backgroundColor: "blue" },
});
