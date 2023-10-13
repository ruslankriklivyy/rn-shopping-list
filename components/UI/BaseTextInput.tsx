import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";

import BASE_COLORS from "@/consts/BASE_COLORS";

interface BaseTextInputProps extends TextInputProps {}

export const BaseTextInput: FC<BaseTextInputProps> = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: BASE_COLORS.bgPrimary,
    borderRadius: 15,
  },
});
