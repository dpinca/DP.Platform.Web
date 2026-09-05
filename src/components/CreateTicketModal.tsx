"use client";

import {
  ticketPriorities
} from "@/constants/ticket";
import {
  CreateTicketInput,
  createTicketSchema
} from "@/schemas/ticket";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type CreateTicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (ticket: CreateTicketInput) => void;
};

export default function CreateTicketModal({
  isOpen,
  onClose,
  onCreate,
}: CreateTicketModalProps) {
 
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<CreateTicketInput>({
  //   resolver: zodResolver(createTicketSchema),
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //     priority: "Medium",
  //   },
  // });
  const form = useForm<CreateTicketInput>({
  resolver: zodResolver(createTicketSchema),
  defaultValues: {
    title: "",
    description: "",
    priority: "Medium",
  },
});
  if (!isOpen) {
    return null;
  }

  function onSubmit(data: CreateTicketInput) {
    onCreate(data);
    onClose();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-zinc-900">Create Ticket</h2>

          <button
            type="button"
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-900"
          >
            ✕
          </button>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              {...form.register("title")}
              placeholder="Enter ticket title"
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none"
            />
            {form.formState.errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.title.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Description
            </label>

            <textarea
              id="description"
              {...form.register("description")}
              placeholder="Describe the issue"
              rows={4}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none"
            />
            {form.formState.errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="priority"
              className="mb-1 block text-sm font-medium text-zinc-700"
            >
              Priority
            </label>

            <select
              id="priority"
              {...form.register("priority")}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm outline-none"
            >
              {ticketPriorities.map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
