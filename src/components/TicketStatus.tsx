import { TicketStatus as TicketStatusType } from "@/types/ticket";

type TicketStatusProps = {
  status: TicketStatusType;
};

export default function TicketStatus({
  status,
}: TicketStatusProps) {
  const statusClasses: Record<TicketStatusType, string> = {
    "To Do": "bg-zinc-200 text-zinc-800",
    "In Progress": "bg-amber-100 text-amber-800",
    "Resolved": "bg-emerald-100 text-emerald-800",
    "Closed": "bg-slate-200 text-slate-700",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-md
        px-3
        py-1
        text-sm
        font-medium
        ${statusClasses[status]}
      `}
    >
      {status}
    </span>
  );
}