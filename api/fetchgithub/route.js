'use client';

import { useEffect, useState } from 'react';

export default function GitHubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/fetchgithub');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) return <p className="text-gray-400">Loading GitHub stats...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-neutral-900 rounded-lg p-6 shadow-lg h-full w-full text-white">
      <h2 className="text-lg text-gray-300 mb-4">GitHub Stats</h2>
      <pre className="text-sm text-gray-200">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
