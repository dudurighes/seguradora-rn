import { useNavigation } from "@react-navigation/native";
import { Button, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  const navigation = useNavigation();

  function handleNext() {
    navigation.navigate("register");
  }

  return (
    <SafeAreaView>
      {/* <Image source={require("../../assets/logo.png")} /> */}
      <Text>Teste</Text>

      <Button title="Próximo" color={"#01633D"} onPress={handleNext} />
    </SafeAreaView>
  );
}
