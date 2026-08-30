import Link from "next/link";

export default function AppSidebar() {
  return (
    <aside className="w-64 border-r border-zinc-200 bg-white p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-zinc-900">
          DP Platform
        </h1>
      </div>

      <nav>
        <ul className="space-y-1">
          <li>
            <Link
              href="/tickets"
              className="block w-full rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Tickets
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard"
              className="block w-full rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              href="/users"
              className="block w-full rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}