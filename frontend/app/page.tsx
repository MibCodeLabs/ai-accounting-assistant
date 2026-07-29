export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-4xl font-bold">
          AI Accounting Assistant
        </h1>

        <p className="mt-4 text-gray-600">
          Your intelligent financial management assistant.
        </p>

        <a
          href="/chat"
          className="inline-block mt-6 bg-black text-white px-6 py-3 rounded"
        >
          Open Assistant
        </a>

      </div>

    </main>
  );
}