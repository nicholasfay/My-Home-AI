import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 mx-auto flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Digital Home Assistant
        </h1>
        <p className="text-gray-500 mx-auto mb-6">
            Welcome to your digital home assistant. Use the navigation above to get started.
        </p>
        <Link className="text-blue-500" href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};
