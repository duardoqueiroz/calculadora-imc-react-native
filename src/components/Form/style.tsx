import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    alignItems: "center",
    marginTop: 70,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#C0C0C0",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  formScreen: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formGroup: {
    marginVertical: 15,
  },
  formLabel: {
    color: "#000000",
    paddingLeft: 18,
    fontSize: 25,
  },
  formInput: {
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    height: 60,
    marginHorizontal: 12,
    marginVertical: 10,
    paddingLeft: 15,
    fontSize: 25,
  },
  formButton: {
    color: "#ffffff",
    padding: 12,
    fontSize: 20,
    backgroundColor: "blue",
  },
  result: {
    flexDirection: "row",
    marginBottom: 30,
  },
  resultText: {
    fontSize: 35,
    fontWeight: "bold",
    marginRight: 10,
  },
  resultValue: {
    fontSize: 35,
    color: "blue",
    fontWeight: "bold",
  },
});

export default styles;
