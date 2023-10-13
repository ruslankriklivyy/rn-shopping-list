import { useLinkTo, useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import BASE_COLORS from "@/consts/BASE_COLORS";
import BASE_FONT from "@/consts/BASE_FONT";

interface ShoppingListItemProps {
  item: any;
}

export const ShoppingListItem: FC<ShoppingListItemProps> = ({ item }) => {
  const linkTo = useLinkTo();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.shoppingListItem}
      onPress={() => {
        linkTo(`/${item.id}`);
        navigation.setParams({ title: item.title });
      }}
    >
      <View
        style={{ ...styles.shoppingListItemColor, backgroundColor: item.color }}
      />

      <View style={styles.shoppingListItemInfo}>
        <View style={styles.shoppingListItemInfoHead}>
          <Text style={styles.shoppingListItemTitle}>{item.title}</Text>

          <Text style={styles.shoppingListItemTasksCount}>3/9</Text>
        </View>

        <View style={styles.shoppingListItemProgressWrapper}>
          <View
            style={{
              ...styles.shoppingListItemProgress,
              width: `${item.progress}%`,
              backgroundColor: item.color,
            }}
          />
          <View style={styles.shoppingListItemProgressBg} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shoppingListItem: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    minHeight: 80,
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
    shadowColor: "#7c7878",
    shadowRadius: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    elevation: 3,
  },
  shoppingListItemColor: {
    width: 15,
    minHeight: 80,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  shoppingListItemInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  shoppingListItemInfoHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  shoppingListItemTitle: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 16,
  },
  shoppingListItemTasksCount: {
    fontFamily: BASE_FONT.medium,
    fontWeight: "500",
    fontSize: 14,
    opacity: 0.5,
  },
  shoppingListItemProgressWrapper: {
    position: "relative",
  },
  shoppingListItemProgress: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: 6,
    borderRadius: 5,
  },
  shoppingListItemProgressBg: {
    backgroundColor: BASE_COLORS.bgPrimary,
    height: 6,
    borderRadius: 5,
  },
});
