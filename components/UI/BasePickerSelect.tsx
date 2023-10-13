import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";

import ChevronIcon from "@/assets/chevron.svg";
import BASE_COLORS from "@/consts/BASE_COLORS";
import BASE_FONT from "@/consts/BASE_FONT";
import { BasePickerSelectItem } from "@/types/general/BasePickerSelectItem";

interface BasePickerSelectProps extends PickerSelectProps {
  items: BasePickerSelectItem[];
  wrapperStyles?: StyleProp<ViewStyle>;
  value: any;
}

const BasePickerSelectChevron = () => (
  <View style={styles.chevronBox}>
    <ChevronIcon style={styles.chevron} width={20} height={20} />
  </View>
);

export const BasePickerSelect: FC<BasePickerSelectProps> = (props) => {
  const { items, value, wrapperStyles } = props;

  return (
    <View style={wrapperStyles ?? styles.wrapper}>
      <RNPickerSelect
        {...props}
        items={items}
        value={value}
        useNativeAndroidPickerStyle={false}
        Icon={props.Icon ?? (BasePickerSelectChevron as unknown as ReactNode)}
        style={{
          inputAndroid: props.style?.inputAndroid ?? styles.input,
          inputIOS: props.style?.inputIOS ?? styles.input,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: BASE_COLORS.bgPrimary,
    borderRadius: 15,
  },
  input: {
    fontFamily: BASE_FONT.regular,
    fontSize: 14,
    paddingVertical: 12.5,
    paddingHorizontal: 10,
    color: BASE_COLORS.text,
  },
  chevronBox: {
    width: 30,
    height: 40,
    marginTop: 15,
  },
  chevron: {
    transform: [{ rotate: "180deg" }],
  },
});
