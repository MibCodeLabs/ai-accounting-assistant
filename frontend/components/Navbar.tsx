import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold">
            <Link 
            href="/"
            className="hover:text-blue-400 transition"
          >
          AI Accounting Assistant
          </Link>
        </h1>


        <nav className="flex gap-6">

          <a
            href="/chat"
            className="hover:text-blue-400 transition"
          >
            Chat
          </a>


          <a
            href="/reports"
            className="hover:text-blue-400 transition"
          >
            Reports
          </a>


          <a
            href="/audit"
            className="hover:text-blue-400 transition"
          >
            Audit
          </a>

        </nav>

      </div>

    </header>
  );
}