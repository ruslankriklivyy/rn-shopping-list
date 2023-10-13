import { FC } from "react";
import { StyleSheet, Text } from "react-native";

import BASE_FONT from "@/consts/BASE_FONT";

interface FormInputLabelProps {
  label: string;
}

export const FormInputLabel: FC<FormInputLabelProps> = ({ label }) => {
  return <Text style={styles.label}>{label}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 16,
  },
});
