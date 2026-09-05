import { ticketPriorities, ticketStatuses } from "@/constants/ticket";

export type TicketPriority = (typeof ticketPriorities)[number];
export type TicketStatus = (typeof ticketStatuses)[number];

export type Ticket = {
  id: string;
  title: string;
  assignee: string;
  status: TicketStatus;
  priority: TicketPriority;
};



