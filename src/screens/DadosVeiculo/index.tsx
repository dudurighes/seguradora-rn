import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from "react-native-masked-text";

type RouteParams = {
  user: string;
  idade: number;
};

export function DadosVeiculo() {
  const [veiculo, setVeiculo] = useState("");
  const [anoVeiculo, setAnoVeiculo] = useState("");
  const [valorVeiculo, setValorVeiculo] = useState("");
  const [placaVeiculo, setPlacaVeiculo] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  const parameters = route.params as RouteParams;

  function handleNext() {
    if (veiculo == "" || anoVeiculo == "" || valorVeiculo == "") {
      Alert.alert("Validação", "Preencha todos os campos");
      return;
    }
    navigation.navigate("orcamento", {
      user: parameters.user,
      idade: parameters.idade,
      veiculo: veiculo,
      ano: Number(anoVeiculo),
      valor: Number(valorVeiculo),
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
            Olá {parameters.user}, agora vamos solicitar os dados do seu
            veiculo.
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Qual seu carro?</Text>
          <TextInput
            value={veiculo}
            onChangeText={setVeiculo}
            style={styles.input}
          />

          <Text style={styles.label}>Qual o ano do seu carro?</Text>
          <TextInput
            keyboardType="numeric"
            value={anoVeiculo}
            onChangeText={setAnoVeiculo}
            style={styles.input}
          />

          <Text style={styles.label}>Qual o valor do seu carro?</Text>
          <TextInput
            keyboardType="numeric"
            value={valorVeiculo}
            onChangeText={setValorVeiculo}
            style={styles.input}
          />

          <Text style={styles.label}>Qual a placa do veículo?</Text>
          <TextInputMask
            type={"custom"}
            style={styles.input}
            value={placaVeiculo}
            options={{ mask: "AAA-9A99" }}
            onChangeText={(textValue) => {
              setPlacaVeiculo(textValue.toUpperCase());
            }}
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
