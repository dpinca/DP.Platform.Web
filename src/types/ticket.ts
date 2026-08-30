export type TicketStatus =
  | "To Do"
  | "In Progress"
  | "Resolved"
  | "Closed";

export type TicketPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

  export type Ticket = {
  id: string;
  title: string;
  assignee: string;
  status: TicketStatus;
  priority: TicketPriority;
};