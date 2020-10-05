import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chair.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={{ fontWeight: "Bold" }}>Everyday is Amazing with</Text>
        <Text style={{ fontWeight: "Bold" }}>with</Text>
        <Text style={{ fontWeight: "Bold" }}>I&M Apparels</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
