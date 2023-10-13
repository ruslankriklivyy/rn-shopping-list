import { FC } from "react";
import { StyleSheet } from "react-native";
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox";

interface BaseCheckboxProps extends IBouncyCheckboxProps {}

export const BaseCheckbox: FC<BaseCheckboxProps> = (props) => {
  return (
    <BouncyCheckbox {...props} fillColor={"#11d414"} style={styles.checkbox} />
  );
};

const styles = StyleSheet.create({
  checkbox: {},
});
