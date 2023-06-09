import { View, Text } from "react-native";
import styles from "./style";
import React from "react";

const Title = ({ name }) => {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>{name}</Text>
    </View>
  );
};

export default Title;
