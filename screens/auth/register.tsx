import { View, Text, StyleSheet } from "react-native";

import { Register } from "@/components/auth/Register";
import BASE_FONT from "@/consts/BASE_FONT";
import MainLayout from "@/layouts/MainLayout";

export default function RegisterScreen() {
  return (
    <MainLayout>
      <View style={styles.box}>
        <Text style={styles.title}>Register</Text>

        <Text style={styles.description}>
          Enter your details below to continue
        </Text>

        <Register />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: BASE_FONT.bold,
    fontWeight: "700",
    fontSize: 26,
    marginBottom: 10,
  },
  description: {
    marginBottom: 25,
  },
});
