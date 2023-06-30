import { EmailSchema } from "./zod.schema";

export type Email = z.infer<typeof EmailSchema>;
