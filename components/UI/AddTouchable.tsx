import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AddIcon from "@/assets/add.svg";
import BASE_COLORS from "@/consts/BASE_COLORS";

interface AddTouchableProps {
  onPress: () => void;
}

export const AddTouchable: FC<AddTouchableProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.add}
      activeOpacity={0.8}
      onPress={() => onPress()}
    >
      <AddIcon width={40} height={40} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  add: {
    flex: 1,
    position: "absolute",
    right: 10,
    bottom: 20,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
    backgroundColor: BASE_COLORS.primary,
    shadowColor: "#7c7878",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
});
