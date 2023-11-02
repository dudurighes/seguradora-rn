import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

export function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  function handleNext() {
    if (user == "" || password == "") {
      Alert.alert("Validação", "Preencha todos os campos");
      return;
    }
    navigation.navigate("inicio", { user: user });
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

        <View style={styles.inputsContainer}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput
            value={user}
            onChangeText={setUser}
            style={styles.inputLogin}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.inputLogin}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputsContainer}>
          <TouchableOpacity style={styles.btnLogin} onPress={handleNext}>
            <Text style={styles.btnLoginText}>Logar</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.forgetPasswordText}>Esqueci minha senha</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
