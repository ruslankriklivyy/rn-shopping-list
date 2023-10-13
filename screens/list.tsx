import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { CategoryList } from "@/components/categories/CategoryList";

export default function ListScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "Test" });
    console.log(route);
  }, [route]);

  return (
    <View style={styles.box}>
      <CategoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
});
