import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { z } from "zod";

import { BasePickerSelect } from "@/components/UI/BasePickerSelect";
import { BaseTextInput } from "@/components/UI/BaseTextInput";
import { BaseTouchable } from "@/components/UI/BaseTouchable";
import { FormInputError } from "@/components/UI/form/FormInputError";
import { FormInputLabel } from "@/components/UI/form/FormInputLabel";
import { CategoryPicker } from "@/components/categories/CategoryPicker";
import { getFormInputRequiredError } from "@/helpers/getFormInputRequiredError";
import { GlobalStyles } from "@/styles/GlobalStyles";

interface CategoryFormProps {
  onClose: () => void;
}

const categoryItemValidationSchema = z.object({
  name: z
    .string({ required_error: getFormInputRequiredError("Name") })
    .min(1, getFormInputRequiredError("Name")),
  quantity: z
    .number({ required_error: getFormInputRequiredError("Quantity") })
    .min(1, getFormInputRequiredError("Quantity")),
  unit: z.number(),
  category_id: z.number({
    required_error: getFormInputRequiredError("Category"),
  }),
});

type CategoryItemValidationSchema = z.infer<
  typeof categoryItemValidationSchema
>;

export const CategoryItemForm: FC<CategoryFormProps> = ({ onClose }) => {
  const defaultValues = (): CategoryItemValidationSchema => ({
    name: "",
    quantity: 0,
    unit: 1,
    category_id: 1,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryItemValidationSchema>({
    resolver: zodResolver(categoryItemValidationSchema),
    defaultValues: defaultValues(),
  });

  const onSubmit = (values: CategoryItemValidationSchema) => {
    console.log(values);
    onClose();
  };

  return (
    <View style={styles.categoryItemForm}>
      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label="Name" />

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <BaseTextInput
              placeholder="Enter name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {errors?.name && <FormInputError error={errors.name.message} />}
      </View>

      <FormInputLabel label="Quantity" />
      <View style={styles.categoryItemFormTwoInputsWrapper}>
        <View style={styles.categoryItemFormTwoInputs}>
          <View style={styles.quantityInput}>
            <Controller
              control={control}
              name="quantity"
              render={({ field: { onChange, onBlur, value } }) => (
                <BaseTextInput
                  placeholder="Enter quantity"
                  keyboardType={"numeric"}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(String(value))}
                  value={String(value)}
                />
              )}
            />
          </View>

          <View style={styles.unitSelect}>
            <Controller
              control={control}
              name="unit"
              render={({ field: { onChange, onBlur, value } }) => (
                <BasePickerSelect
                  items={[
                    { label: "Kilogram", value: 1 },
                    { label: "Litr", value: 2 },
                    { label: "Some", value: 3 },
                  ]}
                  value={value}
                  onValueChange={onChange}
                />
              )}
            />
          </View>
        </View>

        {errors?.quantity && <FormInputError error={errors.quantity.message} />}
      </View>

      <View style={GlobalStyles.formInputField}>
        <FormInputLabel label="Category" />

        <Controller
          control={control}
          name="category_id"
          render={({ field: { onChange, value } }) => (
            <CategoryPicker onChange={onChange} value={value} />
          )}
        />

        {errors?.category_id && (
          <FormInputError error={errors.category_id.message} />
        )}
      </View>

      <View style={GlobalStyles.formBottom}>
        <BaseTouchable text={"Add"} onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemForm: {
    flex: 1,
  },
  categoryItemFormTwoInputsWrapper: {
    marginBottom: 20,
  },
  categoryItemFormTwoInputs: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quantityInput: {
    width: "50%",
  },
  unitSelect: {
    width: "50%",
  },
});
