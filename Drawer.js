import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import ProductsStack from "./ProductsStack";

const MainDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Products: {
    screen: ProductsStack,
  },
});

export default createAppContainer(MainDrawerNavigator);
