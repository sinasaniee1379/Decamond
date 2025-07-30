import { z } from "zod";
import { phoneRegex } from "./constants";

export const LoginFormSchema = z.object({
  mobile: z
    .string()
    .trim()
    .min(1, "Please enter your mobile number.")
    .regex(phoneRegex, "invalid number.")
    .length(11, "Mobile number must be exactly 11 digits."),
});

export type LoginFormSchema = z.infer<typeof LoginFormSchema>;
