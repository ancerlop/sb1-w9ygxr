import React, { useEffect, useState } from 'react';
import { StatsCard } from './components/StatsCard';
import { MatchingFiles } from './components/MatchingFiles';
import { DashboardData } from './types/stats';
import { BarChart, Activity } from 'lucide-react';

function App() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5005/');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin">
          <Activity className="w-8 h-8 text-indigo-600" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center space-x-3">
          <BarChart className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">Statistics Dashboard</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatsCard
            title="Feedback Gessan"
            today={data.today_feedback}
            week={data.week_feedback}
            total={data.total_feedback}
          />
          
          <StatsCard
            title="IA Builder"
            today={data.today_iabuilder}
            week={data.week_iabuilder}
            total={data.total_iabuilder}
          />
        </div>

        <MatchingFiles files={data.matching_files} />
      </main>
    </div>
  );
}

export default App;