import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

type RouteParams = {
  user: string;
};

export function InicioSimulacao() {
  const [idade, setIdade] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  const parameters = route.params as RouteParams;

  function handleNext() {
    if (idade == "") {
      Alert.alert("Validação", "Preencha todos os campos");
      return;
    }
    navigation.navigate("veiculo", {
      user: parameters.user,
      idade: Number(idade),
    });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={["#5374B6", "#f7b5b5"]}
      style={styles.linearGradient}
    >
      <SafeAreaView style={styles.globalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Simulacar</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.label}>
            Olá {parameters.user}, vamos realizar uma simulação para um seguro.
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Qual a sua idade?</Text>
          <TextInput
            value={idade}
            onChangeText={setIdade}
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputsContainer}>
          <TouchableOpacity style={styles.btnGlobal} onPress={handleNext}>
            <Text style={styles.btnGlobalText}>Próximo</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={handleBack}>
            <Text style={styles.return}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
