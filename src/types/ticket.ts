import { z } from "zod";
export type TicketStatus = "To Do" | "In Progress" | "Resolved" | "Closed";

export type Ticket = {
  id: string;
  title: string;
  assignee: string;
  status: TicketStatus;
  priority: TicketPriority;
};

export const ticketPriorities = ["Low", "Medium", "High", "Critical"] as const;

export type TicketPriority = (typeof ticketPriorities)[number];

export const createTicketSchema = z.object({
  title: z.string().trim().min(1, "Title is required."),
  description: z.string().trim().min(1, "Description is required."),

  priority: z.enum(ticketPriorities),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;
