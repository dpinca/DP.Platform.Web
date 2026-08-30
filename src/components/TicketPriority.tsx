import { TicketPriority as TicketPriorityType } from "@/types/ticket";

type TicketPriorityProps = {
  priority: TicketPriorityType;
};

export default function TicketPriority({
  priority,
}: TicketPriorityProps) {
  const priorityClasses: Record<TicketPriorityType, string> = {
    Low: "bg-sky-100 text-sky-800",
    Medium: "bg-amber-100 text-amber-800",
    High: "bg-orange-100 text-orange-800",
    Critical: "bg-red-100 text-red-800",
  };

  return (
    <span
      className={`inline-flex rounded-md px-3 py-1 text-sm font-medium ${priorityClasses[priority]}`}
    >
      {priority}
    </span>
  );
}