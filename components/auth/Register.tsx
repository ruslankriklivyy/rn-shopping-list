import { zodResolver } from "@hookform/resolvers/zod";
import { useLinkTo } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { z } from "zod";

import { BaseTextInput } from "@/components/UI/BaseTextInput";
import { BaseTouchable } from "@/components/UI/BaseTouchable";
import { FormInputError } from "@/components/UI/form/FormInputError";
import { FormInputLabel } from "@/components/UI/form/FormInputLabel";
import { FormPasswordInput } from "@/components/UI/form/FormPasswordInput";
import MESSAGES from "@/consts/MESSAGES";
import { getFormInputRequiredError } from "@/helpers/getFormInputRequiredError";
import { GlobalStyles } from "@/styles/GlobalStyles";

const registerValidationSchema = z
  .object({
    name: z.string({ required_error: getFormInputRequiredError("Name") }),
    email: z
      .string({ required_error: getFormInputRequiredError("Email") })
      .email({ message: MESSAGES.EMAIL_FIELD_ERROR }),
    password: z
      .string({ required_error: getFormInputRequiredError("Password") })
      .min(8, { message: MESSAGES.PASSWORD_FIELD_ERROR }),
    confirm_password: z.string({
      required_error: getFormInputRequiredError("Repeat password"),
    }),
  })
  .refine(({ password, confirm_password }) => password !== confirm_password, {
    path: ["confirm_password"],
    message: MESSAGES.CONFIRM_PASSWORD_FIELD_ERROR,
  });

type RegisterValidationSchema = z.infer<typeof registerValidationSchema>;

export const Register = () => {
  const linkTo = useLinkTo();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValidationSchema>({
    resolver: zodResolver(registerValidationSchema),
  });

  const onRegister = (values: RegisterValidationSchema) => {
    linkTo("/");
  };

  return (
    <View style={styles.box}>
      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label={"Name"} />

        <Controller
          control={control}
          name={"name"}
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseTextInput
              placeholder={"Enter your name"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.name && <FormInputError error={errors.name.message} />}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label={"Email"} />

        <Controller
          control={control}
          name={"email"}
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseTextInput
              placeholder={"Enter your email"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.email && <FormInputError error={errors.email.message} />}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label={"Password"} />

        <Controller
          control={control}
          name={"password"}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormPasswordInput
              secureTextEntry
              placeholder={"Enter your password"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.password && <FormInputError error={errors.password.message} />}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label={"Confirm password"} />

        <Controller
          control={control}
          name={"confirm_password"}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormPasswordInput
              secureTextEntry
              placeholder={"Enter your password again"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.confirm_password && (
          <FormInputError error={errors.confirm_password.message} />
        )}
      </View>

      <BaseTouchable text={"Submit"} onPress={handleSubmit(onRegister)} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "90%",
  },
});
