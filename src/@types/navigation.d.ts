export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      inicio: {
        user: string;
      };
      veiculo: {
        user: string;
        idade: number;
      };
      orcamento: {
        user: string;
        idade: number;
        veiculo: string;
        ano: number;
        valor: number;
      };
    }
  }
}
