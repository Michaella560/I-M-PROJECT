import { createStackNavigator } from "react-navigation-stack";
import Products from "../screens/Products";
import Header from "../Shared/header";
import React from "react";

const screens = {
  Products: {
    screen: Products,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const ProductsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 40 },
  },
});

export default ProductsStack;
