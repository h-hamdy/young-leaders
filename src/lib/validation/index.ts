import * as z from "zod";

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const SignUpValidation = z.object({
  Name: z
    .string()
    .min(2, {
      message: "Your name is sucks",
    })
    .max(15, {
      message: "Your Name is too long",
    }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});
