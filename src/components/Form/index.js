import { View, TextInput, Text } from "react-native";
import styles from "./style";
import Button from "../Button";
import React, { useState } from "react";
import DismissKeyboard from "../../helpers/DimissKeyboard";

const Form = () => {
  const [height, setHeight] = useState("0");
  const [weight, setWeight] = useState("0");
  const [imc, setImc] = useState("0");
  const handleHeightChange = (newHeight) => setHeight(newHeight);
  const handleWeightChange = (newWeight) => setWeight(newWeight);

  const calculeImc = () => {
    const heightFormat = height.replace(",", ".");
    const weightFormat = weight.replace(",", ".");
    const newImc = +weightFormat / (+heightFormat * +heightFormat);
    setImc(newImc.toFixed(2));
  };

  return (
    <DismissKeyboard>
      <View style={styles.formContext}>
        <View style={styles.formScreen}>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Ex: 1.70"
              keyboardType="numeric"
              onChangeText={handleHeightChange}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Ex: 60.30"
              keyboardType="numeric"
              onChangeText={handleWeightChange}
            />
          </View>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>IMC: </Text>
          <Text style={styles.resultValue}>{imc}</Text>
        </View>
        <Button
          onPress={calculeImc}
          title="CALCULAR"
          styles={styles.formButton}
        />
      </View>
    </DismissKeyboard>
  );
};

export default Form;
