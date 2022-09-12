import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 60
  },
  box: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 280,
    marginBottom: 20
  },
  boxTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15
  },
  boxParagrafo:{
    fontSize: 16,
    marginBottom: 10
  },
  img: {
    width: 200,
    height: 200
  }
});

export default estilos;