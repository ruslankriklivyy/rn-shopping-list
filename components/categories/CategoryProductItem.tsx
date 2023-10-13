import { FC, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { BaseCheckbox } from "@/components/UI/BaseCheckbox";
import BASE_FONT from "@/consts/BASE_FONT";

interface CategoryProductItemProps {
  item: any;
}

const CategoryProductItemInfo: FC<CategoryProductItemProps> = ({ item }) => {
  return (
    <View style={styles.categoryProductItem}>
      <View style={styles.categoryProductItemLeft}>
        <Text style={styles.categoryProductItemName}>{item.name}</Text>
      </View>
      <View style={styles.categoryProductItemRight}>
        <Text style={styles.categoryProductItemQuantity}>10 kg</Text>
      </View>
    </View>
  );
};

export const CategoryProductItem: FC<CategoryProductItemProps> = ({ item }) => {
  const checkedAnimation = useRef(new Animated.Value(0)).current;

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const backgroundColor = checkedAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(255, 255, 255 ,1)", "rgba(17, 212, 20, 0.2)"],
  });

  const onToggleChecked = (value: boolean) => {
    setIsChecked(value);

    if (value) {
      Animated.timing(checkedAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(checkedAnimation, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Animated.View
      style={[styles.categoryProductItemWrapper, { backgroundColor }]}
    >
      <BaseCheckbox
        fillColor={"#A0A6B3"}
        textComponent={<CategoryProductItemInfo item={item} />}
        onPress={() => onToggleChecked(!isChecked)}
        isChecked={isChecked}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  categoryProductItemWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  categoryProductItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  categoryProductItemName: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 5,
  },
  categoryProductItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryProductItemRight: {},
  categoryProductItemQuantity: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 12,
    opacity: 0.5,
  },
});
