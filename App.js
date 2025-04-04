import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}