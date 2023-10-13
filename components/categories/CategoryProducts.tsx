import { FC } from "react";
import { Animated, FlatList, ScrollView, StyleSheet, View } from "react-native";

import { CategoryProductItem } from "@/components/categories/CategoryProductItem";
import BASE_COLORS from "@/consts/BASE_COLORS";

const MOCK_DATA = [
  {
    id: 1,
    name: "Milk",
    quantity: 4,
    unit: "Kilogram",
    is_completed: false,
  },
  {
    id: 2,
    name: "Water",
    quantity: 4,
    unit: "Kilogram",
    is_completed: false,
  },
  {
    id: 3,
    name: "Banana",
    quantity: 4,
    unit: "Kilogram",
    is_completed: false,
  },
  {
    id: 4,
    name: "Some",
    quantity: 4,
    unit: "Kilogram",
    is_completed: false,
  },
];

interface CategoryProductsProps {
  listHeight?: Animated.AnimatedInterpolation<string | number>;
}

export const CategoryProducts: FC<CategoryProductsProps> = ({
  listHeight = 0,
}) => {
  return (
    <Animated.View
      style={{
        ...styles.categoryProducts,
        height: listHeight,
      }}
    >
      <ScrollView style={styles.categoryProductsScroll}>
        <FlatList
          data={MOCK_DATA}
          contentContainerStyle={styles.categoryProductsBox}
          renderItem={({ item }) => <CategoryProductItem item={item} />}
        />
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  categoryProducts: {
    borderTopWidth: 1,
    borderTopColor: BASE_COLORS.bgPrimary,
    borderStyle: "solid",
  },
  categoryProductsBox: {
    flex: 1,
    flexDirection: "column",
  },
  categoryProductsScroll: {
    flex: 1,
  },
});
