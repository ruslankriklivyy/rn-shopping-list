import { LinkingOptions } from "@react-navigation/native/lib/typescript/src/types";

export default {
  prefixes: ["exp://10.10.56.70:8081"],
  config: {
    screens: {
      Home: "/",
      List: "/:id",
      Register: "/auth/register",
      Login: "/auth/login",
    },
  },
} as unknown as LinkingOptions<object>;
