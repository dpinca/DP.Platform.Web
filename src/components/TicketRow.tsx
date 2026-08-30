import { TicketPriority, TicketStatus as TicketStatusType} from "@/types/ticket";
import TicketStatus from "@/components/TicketStatus";


type TicketRowProps = {
  title: string;
  assignee: string;
  status: TicketStatusType;
  priority: TicketPriority;
};

export default function TicketRow({
    title,
    assignee,
    status,
    priority
} : TicketRowProps){
    return (
    <div className="flex items-center gap-4 border-b border-zinc-200 px-4 py-3">
      <div className="flex-1">
        <p className="font-medium">{title}</p>
      </div>

      <div className="w-40">
        <span>{assignee}</span>
      </div>

      <div className="w-36">
        <TicketStatus status={status} />
      </div>

      <div className="w-28">
        <span>{priority}</span>
      </div>
    </div>
  );
}

