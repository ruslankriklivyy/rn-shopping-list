import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import AddUserIcon from "@/assets/add-user.svg";
import ThreeDotsIcon from "@/assets/three-dots.svg";
import { BasePickerSelect } from "@/components/UI/BasePickerSelect";

const ThreeDots = () => <ThreeDotsIcon width={23} height={23} />;

export const HeaderRight = () => {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.addUser} activeOpacity={0.4}>
        <AddUserIcon width={20} height={20} />
      </TouchableOpacity>

      <BasePickerSelect
        items={[
          { label: "Profile", value: "profile" },
          { label: "Logout", value: "logout" },
        ]}
        value={null}
        wrapperStyles={styles.selectWrapper}
        style={{
          inputAndroid: {
            opacity: 0,
            width: 23,
            height: 23,
            backfaceVisibility: "hidden",
          },
        }}
        placeholder={{}}
        Icon={ThreeDots as unknown as ReactNode}
        onValueChange={() => null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectWrapper: {
    marginLeft: 20,
  },
  addUser: {
    width: 20,
    height: 20,
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
