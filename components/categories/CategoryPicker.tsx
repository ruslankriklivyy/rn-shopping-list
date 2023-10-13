import { FC, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import FoodIcon from "@/assets/food.svg";
import BASE_COLORS from "@/consts/BASE_COLORS";
import BASE_FONT from "@/consts/BASE_FONT";

const MOCK_DATA = [
  {
    id: 1,
    name: "Food",
    icon: <FoodIcon width={50} height={50} />,
  },
  {
    id: 2,
    name: "Some",
    icon: <FoodIcon width={50} height={50} />,
  },
  {
    id: 3,
    name: "Seom 2",
    icon: <FoodIcon width={50} height={50} />,
  },
  {
    id: 4,
    name: "Test",
    icon: <FoodIcon width={50} height={50} />,
  },
  {
    id: 5,
    name: "Test 2",
    icon: <FoodIcon width={50} height={50} />,
  },
  {
    id: 6,
    name: "Test 3",
    icon: <FoodIcon width={50} height={50} />,
  },
];

interface CategoryPickerProps {
  value: number;
  onChange: (categoryId: number) => void;
}

interface CategoryPickerItemProps {
  item: any;
  onChange: (categoryId: number) => void;
}

const CategoryPickerItem: FC<CategoryPickerItemProps> = ({
  item,
  onChange,
}) => {
  const [isPicked, setIsPicked] = useState<boolean>(false);

  const pickCategoryAnimation = useRef(new Animated.Value(0)).current;
  const pickCategoryBgAnimation = useRef(new Animated.Value(0)).current;

  const elevation = pickCategoryAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4],
  });
  const backgroundColor = pickCategoryBgAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [BASE_COLORS.bgPrimary, "#ffffff"],
  });

  const onPick = (categoryId: number, isChecked: boolean) => {
    onChange(categoryId);

    if (item.id === categoryId && isChecked) {
      setIsPicked(true);
      Animated.timing(pickCategoryAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      Animated.timing(pickCategoryBgAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      return;
    }

    setIsPicked(false);
    Animated.timing(pickCategoryAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(pickCategoryBgAnimation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ ...styles.item, elevation, backgroundColor }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPick(item.id, !isPicked)}
      >
        <Text style={styles.name}>{item.name}</Text>

        <View style={styles.icon}>{item.icon}</View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const CategoryPicker: FC<CategoryPickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <View style={styles.box}>
      {MOCK_DATA.map((item) => (
        <CategoryPickerItem key={item.id} item={item} onChange={onChange} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  item: {
    backgroundColor: BASE_COLORS.bgPrimary,
    borderRadius: 10,
    width: 80,
    height: 80,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
  },
  icon: {
    marginLeft: "auto",
  },
});
