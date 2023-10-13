import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { z } from "zod";

import { BaseColorPicker } from "@/components/UI/BaseColorPicker";
import { BaseTextInput } from "@/components/UI/BaseTextInput";
import { BaseTouchable } from "@/components/UI/BaseTouchable";
import { FormInputError } from "@/components/UI/form/FormInputError";
import { FormInputLabel } from "@/components/UI/form/FormInputLabel";
import { getFormInputRequiredError } from "@/helpers/getFormInputRequiredError";
import { GlobalStyles } from "@/styles/GlobalStyles";

const shoppingValidationSchema = z.object({
  title: z
    .string({ required_error: getFormInputRequiredError("Title") })
    .min(1, getFormInputRequiredError("Title")),
  description: z.string().optional().nullable(),
  color: z.string({ required_error: getFormInputRequiredError("Color") }),
});

type ShoppingValidationSchema = z.infer<typeof shoppingValidationSchema>;

interface ShoppingFormProps {
  onClose: () => void;
}

export const ShoppingForm: FC<ShoppingFormProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShoppingValidationSchema>({
    resolver: zodResolver(shoppingValidationSchema),
  });

  const onSubmit = (values: ShoppingValidationSchema) => {
    console.log(values);
    onClose();
  };

  return (
    <View style={styles.shoppingForm}>
      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label="Title" />

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseTextInput
              placeholder="Enter title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.title && <FormInputError error={errors.title.message} />}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label="Description" />

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseTextInput
              placeholder="Enter description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value || undefined}
            />
          )}
        />

        {errors?.description && (
          <FormInputError error={errors.description.message} />
        )}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label="Color" />

        <Controller
          control={control}
          name="color"
          render={({ field: { onChange, value } }) => (
            <BaseColorPicker onChange={onChange} />
          )}
        />

        {errors?.color && <FormInputError error={errors.color.message} />}
      </View>

      <View style={GlobalStyles.formBottom}>
        <BaseTouchable
          width="48%"
          type="outlined"
          text="Cancel"
          onPress={() => onClose()}
        />

        <BaseTouchable
          width="48%"
          text="Create"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingForm: { position: "relative", flex: 1 },
});
