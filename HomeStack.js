import { createStackNavigator } from "react-navigation-stack";
import WelecomeScreen from "../screens/WelcomeScreen";
import Header from "../Shared/header";
import React from "react";
const screens = {
  WelecomeScreen: {
    screen: WelecomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const Homestack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 40 },
  },
});

export default Homestack;
