import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Register } from "./src/screens/Register";
// import { Result } from "./src/screens/Result";
// import { Routes } from './src/routes';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ab2222",
    alignItems: "center",
    justifyContent: "center",
  },
});
