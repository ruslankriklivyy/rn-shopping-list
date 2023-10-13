import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <View style={styles.root}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 25,
    paddingHorizontal: 10,
  },
});
