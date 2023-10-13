import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import BASE_COLORS from "@/consts/BASE_COLORS";
import BASE_FONT from "@/consts/BASE_FONT";

type BaseTouchableType = "primary" | "outlined";

interface BaseTouchableProps {
  text: string;
  width?: string;
  type?: BaseTouchableType;
  onPress: () => void;
}

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: BASE_COLORS.primary,
  },
  touchableOutlined: {
    paddingVertical: 12,
    borderRadius: 15,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: BASE_COLORS.text,
  },
  touchableText: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 16,
    color: BASE_COLORS.secondaryText,
    textAlign: "center",
  },
  touchableTextOutlined: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 16,
    color: BASE_COLORS.text,
    textAlign: "center",
  },
});

const BaseTouchableStyles = {
  primary: styles.touchable,
  outlined: styles.touchableOutlined,
};
const BaseTouchableTextStyles = {
  primary: styles.touchableText,
  outlined: styles.touchableTextOutlined,
};

export const BaseTouchable: FC<BaseTouchableProps> = ({
  text,
  width = "100%",
  type = "primary",
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...BaseTouchableStyles[type],
        width: width as unknown as number,
      }}
      onPress={() => onPress()}
    >
      <Text style={BaseTouchableTextStyles[type]}>{text}</Text>
    </TouchableOpacity>
  );
};
