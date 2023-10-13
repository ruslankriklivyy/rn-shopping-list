import { FC, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";

import EyeOffIcon from "@/assets/eye-off.svg";
import EyeIcon from "@/assets/eye.svg";
import BASE_COLORS from "@/consts/BASE_COLORS";

interface FormPasswordInputProps extends TextInputProps {}

export const FormPasswordInput: FC<FormPasswordInputProps> = (props) => {
  const [isSecureText, setIsSecureText] = useState<boolean>(true);

  return (
    <View style={styles.box}>
      <TextInput
        {...props}
        secureTextEntry={isSecureText}
        style={styles.formPasswordInput}
      />

      {isSecureText && (
        <EyeIcon
          width={25}
          height={25}
          onPress={() => setIsSecureText((prev) => !prev)}
        />
      )}

      {!isSecureText && (
        <EyeOffIcon
          width={25}
          height={25}
          onPress={() => setIsSecureText((prev) => !prev)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: BASE_COLORS.bgPrimary,
    borderRadius: 15,
  },
  formPasswordInput: {
    width: "90%",
  },
});
