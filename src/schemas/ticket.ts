import { z } from "zod";
import { ticketPriorities } from "@/constants/ticket";

export const createTicketSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),

  description: z.string().trim().min(1, "Description is required."),

  priority: z.enum(ticketPriorities),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;
