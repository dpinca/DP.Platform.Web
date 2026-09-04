import { ticketPriorities } from "@/constants/ticket";

export type TicketStatus = "To Do" | "In Progress" | "Resolved" | "Closed";

export type Ticket = {
  id: string;
  title: string;
  assignee: string;
  status: TicketStatus;
  priority: TicketPriority;
};


export type TicketPriority = (typeof ticketPriorities)[number];

