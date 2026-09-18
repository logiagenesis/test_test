import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">BPO Accelerator Platform</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Profit-first BPO operating system for finding clients, closing deals, and tracking profit.
        </p>
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/leads"
            className="block w-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 font-medium py-3 px-4 rounded-lg transition-colors"
          >
            View Leads
          </Link>
        </div>
      </div>
    </div>
  );
}
