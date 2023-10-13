import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import BASE_COLORS from "@/consts/BASE_COLORS";
import BASE_FONT from "@/consts/BASE_FONT";

interface FormInputErrorProps {
  error?: string | null;
}

export const FormInputError: FC<FormInputErrorProps> = ({ error }) => {
  return (
    <View style={styles.formInputErrorBox}>
      <Text style={styles.formInputErrorMessage}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formInputErrorBox: {
    marginTop: 3,
  },
  formInputErrorMessage: {
    fontFamily: BASE_FONT.regular,
    fontWeight: "400",
    fontSize: 13,
    color: BASE_COLORS.errorPrimary,
  },
});
