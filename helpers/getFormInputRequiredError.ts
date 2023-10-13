import MESSAGES from "@/consts/MESSAGES";

export const getFormInputRequiredError = (name: string) =>
  MESSAGES.REQUIRED_FIELD_ERROR_MESSAGE.replace("{{name}}", name);
