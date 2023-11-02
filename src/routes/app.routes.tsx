import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { InicioSimulacao } from "../screens/InicioSimulacao";
import { DadosVeiculo } from "../screens/DadosVeiculo";
import { Orcamento } from "../screens/Orcamento";

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="inicio" component={InicioSimulacao} />
      <Screen name="veiculo" component={DadosVeiculo} />
      <Screen name="orcamento" component={Orcamento} />
      {/* <Screen name="result" component={Result} /> */}
    </Navigator>
  );
}
