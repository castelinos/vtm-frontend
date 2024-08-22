import * as z from "zod";

export const DriverValidation = z.object({
  avatar: z.any(), //z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  contact: z.string().length(10), // Basic assumption for contact 
});

