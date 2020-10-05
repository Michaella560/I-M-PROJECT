import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function App({ navigation }) {
  const [Items, setItems] = useState([
    {
      Name: "Item 1: Small",
      key: "1",
      body: "Funny Programmer Algorithm T-Shirt",
    },
    {
      Name: "Item 2: Medium",
      key: "2",
      body:
        "Unisex T-shirts Shirts Vintage T- shirt 90s Tshirts T Shirt T- shirts Tees",
    },
    {
      Name: "Item 3: Large",
      key: "3",
      body:
        "Marketplace | Teezily | Buy, Create & Sell T-shirts to turn your ideas into reality",
    },
    {
      Name: "Item 4: XS ",
      key: "4",
      body:
        "I’m A Computer Scientist T-Shirt Funny Sarcasm Stupidity Computer Science Tee, Gift for Computer Scientists",
    },
    {
      Name: "Item 5: XXL ",
      key: "5",
      body:
        "Marketplace | Teezily | Buy, Create & Sell T-shirts to turn your ideas into reality",
    },
    {
      Name: "Item 6: 3XL",
      key: "6",
      body: "I AM SMALL AND SENSITIVE BUT ALSO FIGHT ME CAT T-SHIRT",
    },
    { Name: "Item 7: 4XL", key: "7", body: "Semicolon Makes Me Stress" },
  ]);

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require("./assets/chair.jpg")}
    >
      <FlatList
        data={Items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Items", item)}>
            <Text>{item.Name}</Text>
            <View key={item.key}>
              <Text style={styles.Items}>{item.Name}</Text>
              <ScrollView>
                <Image
                  style={{ height: 400, width: 330, margin: 5 }}
                  source={require("./assets/algorithm.jpg")}
                />
                <Image
                  style={{ height: 400, width: 325, margin: 5 }}
                  source={require("./assets/nasa.jpg")}
                />
                <Image
                  style={{ height: 400, width: 335, margin: 5 }}
                  source={require("./assets/always.jpg")}
                />
                <Image
                  style={{ height: 400, width: 335, margin: 5 }}
                  source={require("./assets/stupidity.jpg")}
                />
                <Image
                  style={{ height: 400, width: 335, margin: 5 }}
                  source={require("./assets/cat.jpg")}
                />
                <Image
                  style={{ height: 400, width: 335, margin: 5 }}
                  source={require("./assets/semicolon.jpg")}
                />
              </ScrollView>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  Items: {
    marginTop: 21,
    backgroundColor: "#fff",
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
  },
});
