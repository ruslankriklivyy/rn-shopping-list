import { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

interface BaseColorPickerProps {
  onChange: (value: string) => void;
}

export const BaseColorPicker: FC<BaseColorPickerProps> = ({ onChange }) => {
  const [currentColor, setCurrentColor] = useState<string>("");

  return (
    <View style={styles.box}>
      <ColorPicker
        noSnap
        color={currentColor}
        onColorChange={setCurrentColor}
        onColorChangeComplete={onChange}
        thumbSize={40}
        sliderSize={40}
        row={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 320,
  },
});
