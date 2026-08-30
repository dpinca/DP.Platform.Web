"use client";

import { useState } from "react";
import TicketRow from "@/components/TicketRow";
import { Ticket } from "@/types/ticket";
import CreateTicketModal from "@/components/CreateTicketModal";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const initialTickets: Ticket[] = [
    {
      id: "1",
      title: "Unable to login",
      assignee: "Daryl",
      status: "In Progress",
      priority: "High",
    },
    {
      id: "2",
      title: "Email verification not received",
      assignee: "John",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: "3",
      title: "Dashboard loading slowly",
      assignee: "Sarah",
      status: "Resolved",
      priority: "Critical",
    },
  ];
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase()),
  );
  function handleCreate(ticket: { title: string; description: string }) {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      title: ticket.title,
      assignee: "Daryl",
      status: "To Do",
      priority: "Medium",
    };

    setTickets((currentTickets) => [...currentTickets, newTicket]);
  }
  return (
    <main className="flex min-h-screen bg-zinc-50 text-zinc-900">
      <div className="flex-1 p-8">
        <div className="mx-auto max-w-6xl">
          {/* Keep your existing header */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-zinc-900">Tickets</h1>

              <p className="mt-1 text-sm text-zinc-500">
                Manage and track support tickets
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsCreateOpen(true)}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create Ticket
            </button>
          </div>

          {/* Keep your existing search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full max-w-sm rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Keep your existing ticket list */}
          <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
            <div className="flex items-center gap-4 border-b border-zinc-200 bg-zinc-50 px-4 py-3 text-xs font-semibold uppercase text-zinc-500">
              <div className="flex-1">Ticket</div>

              <div className="w-40">Assignee</div>

              <div className="w-36">Status</div>

              <div className="w-28">Priority</div>
            </div>

            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <TicketRow
                  key={ticket.id}
                  title={ticket.title}
                  assignee={ticket.assignee}
                  status={ticket.status}
                  priority={ticket.priority}
                />
              ))
            ) : (
              <div className="px-4 py-10 text-center text-sm text-zinc-500">
                No tickets found.
              </div>
            )}
          </div>
        </div>

        {isCreateOpen && (
          <CreateTicketModal
            isOpen={isCreateOpen}
            onClose={() => setIsCreateOpen(false)}
             onCreate={handleCreate}
          />
        )}
      </div>
    </main>
  );
}
