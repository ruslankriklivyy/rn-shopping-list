import { FC, useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ChevronIcon from "@/assets/chevron.svg";
import FoodIcon from "@/assets/food.svg";
import { CategoryProducts } from "@/components/categories/CategoryProducts";
import BASE_FONT from "@/consts/BASE_FONT";

interface ShoppingItemProps {
  item: any;
}

export const CategoryItem: FC<ShoppingItemProps> = ({ item }) => {
  const showListAnimation = useRef(new Animated.Value(0)).current;

  const [isShowList, setIsShowList] = useState<boolean>(false);

  const listHeight = showListAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 165],
  });

  const onToggleShowList = (value: boolean) => {
    setIsShowList(value);

    if (value) {
      Animated.timing(showListAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(showListAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.categoryItemBox}
        onPress={() => onToggleShowList(!isShowList)}
      >
        <View style={styles.categoryItemLeft}>
          <FoodIcon width={50} height={50} style={styles.categoryItemIcon} />

          <Text style={styles.categoryItemName}>{item.name}</Text>
        </View>

        <View style={styles.categoryItemRight}>
          <Text style={styles.categoryItemCount}>3</Text>

          <ChevronIcon
            style={isShowList ? styles.chevronUp : styles.chevronDown}
            width={20}
            height={20}
          />
        </View>
      </TouchableOpacity>

      <CategoryProducts listHeight={listHeight} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    paddingTop: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
  },
  categoryItemBox: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryItemIcon: {
    marginRight: 5,
  },
  categoryItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryItemName: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 14,
  },
  categoryItemCount: {
    marginRight: 10,
  },
  categoryItemsListToggle: {
    width: 30,
    height: 30,
  },
  chevronDown: {
    transform: [{ rotate: "180deg" }],
  },
  chevronUp: {
    transform: [{ rotate: "0deg" }],
  },
});
