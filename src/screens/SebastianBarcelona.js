import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const SebastianBarcelona = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textContent}>Sebastian Barcelona</Text>
      </View>
    </SafeAreaView>
  );
};

export default SebastianBarcelona;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
