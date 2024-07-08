import { useState } from "react";
import { Text, View, Image, ScrollView, Button, Modal } from "react-native";
import Custom from "./custom";
import Box from "./element/box";

const img = require("../assets/images/adaptive-icon.png");

export default function Index() {
  const [isModelVisible, setIsModelVisible] = useState(false);

  return (
    <View
      style={{ backgroundColor: "green", padding: 10, margin: 10 }}
    >
      <View>
        <Box style={{ backgroundColor: "red" }}>box1</Box>
        <Box style={{ backgroundColor: "blue" }}>box2</Box>
        <Box style={{ backgroundColor: "pink" }}>box3</Box>

        {/* <Custom name="React Native" /> */}

        {/* <Image source={img} style={{ height: 200, width: 200 }} />
        <Button
          title="press"
          onPress={() => {
            setIsModelVisible(true);
          }}
        />

        <Modal
          visible={isModelVisible}
          animationType="slide"
          onRequestClose={() => {
            setIsModelVisible(false);
          }}
        >
          <Text>Close Text</Text>
          <Button
            title="close"
            onPress={() => {
              setIsModelVisible(false);
            }}
          />
        </Modal> */}
      </ View>
    </View>
  );
}
