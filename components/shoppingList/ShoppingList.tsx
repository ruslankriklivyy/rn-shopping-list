import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { AddTouchable } from "@/components/UI/AddTouchable";
import { BaseModal } from "@/components/UI/BaseModal";
import { ShoppingForm } from "@/components/shoppingList/ShoppingForm";
import { ShoppingListItem } from "@/components/shoppingList/ShoppingListItem";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Shop",
    color: "#c0ea44",
    progress: 20,
  },
  {
    id: 2,
    title: "Sport",
    color: "#10aedb",
    progress: 80,
  },
  {
    id: 3,
    title: "Groceries",
    color: "#ff9646",
    progress: 40,
  },
];

export const ShoppingList = () => {
  const [isVisibleAddModal, setIsVisibleAddModal] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        contentContainerStyle={styles.box}
        data={MOCK_ITEMS}
        renderItem={({ item }) => <ShoppingListItem item={item} />}
        keyExtractor={(item) => String(item.id)}
      />

      <BaseModal
        title="New list"
        isVisible={isVisibleAddModal}
        onClose={() => setIsVisibleAddModal(false)}
      >
        <ShoppingForm onClose={() => setIsVisibleAddModal(false)} />
      </BaseModal>

      <AddTouchable onPress={() => setIsVisibleAddModal(true)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  box: {
    flexGrow: 1,
    gap: 15,
  },
});
