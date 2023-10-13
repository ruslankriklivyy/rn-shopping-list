import { FC, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { AddTouchable } from "@/components/UI/AddTouchable";
import { BaseModal } from "@/components/UI/BaseModal";
import { CategoryItem } from "@/components/categories/CategoryItem";
import { CategoryItemForm } from "@/components/categories/CategoryItemForm";

const MOCK_DATA = [
  {
    id: 1,
    name: "Orange",
    quantity: 10,
    unit: "Kilogram",
    category_id: 1,
  },
  {
    id: 2,
    name: "Apple",
    quantity: 5,
    unit: "Kilogram",
    category_id: 1,
  },
  {
    id: 3,
    name: "Bread",
    quantity: 1,
    unit: "Kilogram",
    category_id: 2,
  },
];

interface ShoppingItemsProps {}

export const CategoryList: FC<ShoppingItemsProps> = () => {
  const [isShowCategoryItemForm, setIsShowCategoryItemForm] =
    useState<boolean>(false);

  return (
    <SafeAreaView style={styles.categories}>
      <FlatList
        data={MOCK_DATA}
        contentContainerStyle={styles.categoriesList}
        renderItem={({ item }) => <CategoryItem item={item} />}
        keyExtractor={(item) => String(item.id)}
      />

      <AddTouchable onPress={() => setIsShowCategoryItemForm(true)} />

      <BaseModal
        title={"Add item"}
        isVisible={isShowCategoryItemForm}
        onClose={() => setIsShowCategoryItemForm(false)}
      >
        <CategoryItemForm onClose={() => setIsShowCategoryItemForm(false)} />
      </BaseModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categories: { flex: 1 },
  categoriesList: {
    flexGrow: 1,
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
