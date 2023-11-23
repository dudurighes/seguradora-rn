import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type RouteParams = {
  user: string;
  idade: number;
  veiculo: string;
  ano: number;
  valor: number;
};

export function Orcamento() {
  const [valorBase, setValorBase] = useState(0);
  const [valorPorIdade, setValorPorIdade] = useState(0);
  const [valorPorAno, setValorPorAno] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);
  const [iconeMoeda, setIconeMoeda] = useState("");

  const navigation = useNavigation();

  const route = useRoute();

  const parameters = route.params as RouteParams;

  const precoDolar = 5.0;

  function handleNext() {
    navigation.navigate("inicio", { user: parameters.user });
  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    var valorBaseInicio = calcularValorBase();
    var valorTotal = valorBaseInicio;

    var valorPorIdade = calcularValorPorIdade(valorTotal);
    valorTotal = valorTotal + valorPorIdade;

    var valorPorAno = calcularValorPorAno(valorTotal);
    valorTotal = valorTotal + valorPorAno;

     setIconeMoeda("R$");
    setValorBase(valorBase);
    setValorPorIdade(valorPorIdade);
    setValorPorAno(valorPorAno);
    setValorTotal(valorTotal);
  }, []);

  function calcularValorBase() {
    var valorBase = 1000;
    var valorVeiculo = parameters.valor;
    if (valorVeiculo > 100000) {
      valorBase = 2000;
    } else if (valorVeiculo >= 50000 && valorVeiculo <= 100000) {
      valorBase = 1500;
    }
    return valorBase;
  }

  function calcularValorPorIdade(valorTotal: number) {
    var valorIdade = 0;
    if (parameters.idade < 22) {
      valorIdade = valorTotal * 0.2;
    } else if (parameters.idade >= 22 && parameters.idade < 28) {
      valorIdade = valorTotal * 0.18;
    } else {
      valorIdade = valorTotal * -0.15;
    }
    return valorIdade;
  }

  function calcularValorPorAno(valorTotal: number) {
    var valorAno = 0;
    if (parameters.ano < 2000) {
      valorAno = valorTotal * 0.3;
    } else if (parameters.ano >= 2000 && parameters.ano <= 2009) {
      valorAno = valorTotal * 0.15;
    } else if (parameters.ano >= 2016) {
      valorAno = valorTotal * 0.1;
    }
    return valorAno;
  }

  function valoresEmDolar() {
    var valorBaseDolar = valorBase / precoDolar;
    var valorTotalDolar = valorTotal / precoDolar;
    var valorPorIdadeDolar = valorPorIdade / precoDolar;
    var valorPorAnoDolar = valorPorAno / precoDolar;

    setValorBase(valorBaseDolar);
    setValorTotal(valorTotalDolar);
    setValorPorIdade(valorPorIdadeDolar);
    setValorPorAno(valorPorAnoDolar);
    setIconeMoeda("$");
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
            Olá {parameters.user}, fizemos um orçamento para seu veiculo{" "}
            {parameters.veiculo}.
          </Text>
        </View>

        <View style={styles.containerInfo}>
          <Card text="Base" value={valorBase} iconeMoeda={iconeMoeda} />
          <Card
            text="Por idade"
            value={valorPorIdade}
            iconeMoeda={iconeMoeda}
          />
          <Card text="Por ano" value={valorPorAno} iconeMoeda={iconeMoeda} />
        </View>

        <View style={styles.containerInfo}>
          <Card text="Total" value={valorTotal} iconeMoeda={iconeMoeda} />
        </View>

        <BouncyCheckbox
          fillColor="black"
          unfillColor="#FFFFFF"
          textStyle={{ textDecorationLine: "none", color: "black" }}
          text="Valores em dólar"
          iconStyle={{ borderColor: "black" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            if (isChecked) {
              valoresEmDolar();
            } else {
              calcularSeguro();
            }
          }}
        />

        <View style={styles.containerInfo}>
          <TouchableOpacity style={styles.btnGlobal} onPress={handleNext}>
            <Text style={styles.btnGlobalText}>Finalizar</Text>
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
