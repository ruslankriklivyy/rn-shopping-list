import { FC, ReactNode } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import BASE_FONT from "@/consts/BASE_FONT";

interface BaseModalProps {
  children: ReactNode;
  title: string;
  isVisible: boolean;
  onClose: () => void;
}

export const BaseModal: FC<BaseModalProps> = ({
  children,
  title,
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      visible={isVisible}
      presentationStyle={"pageSheet"}
      animationType={"slide"}
      onRequestClose={() => onClose()}
    >
      <Text style={styles.title}>{title}</Text>

      <SafeAreaView style={styles.modalContentWrapper}>
        <ScrollView style={styles.modalContentScroll}>
          <View style={styles.modalContent}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: BASE_FONT.semiBold,
    fontWeight: "600",
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  modalContentWrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  modalContentScroll: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
