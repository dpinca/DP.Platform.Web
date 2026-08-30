"use client";

import { useState } from "react";

import TicketRow from "@/components/TicketRow";
import { Ticket } from "@/types/ticket";

const tickets: Ticket[] = [
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

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
  <main className="flex min-h-screen bg-zinc-50 text-zinc-900">
    

    <div className="flex-1 p-8">
      <div className="mx-auto max-w-6xl">

        {/* Keep your existing header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-zinc-900">
            Tickets
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Manage and track support tickets
          </p>
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
    </div>
  </main>
);
}
