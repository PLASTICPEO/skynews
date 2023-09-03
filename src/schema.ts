import { z } from "zod";

export const emailSchema = z.string().email();

export const numberSchema = z.string().transform((val) => {
  if (val.length !== 9) throw new Error("Type4 must have 9 digits");
  return parseInt(val, 9);
});
