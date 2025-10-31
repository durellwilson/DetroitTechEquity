'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Transit() {
  const [route, setRoute] = useState('16');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const searchTransit = async () => {
    setLoading(true);
    const res = await fetch(`/api/transit?route=${route}`);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  };

  useEffect(() => {
    searchTransit();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-detroit-blue via-slate-900 to-black text-white">
      <nav className="border-b border-detroit-gold/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-detroit-gold hover:underline">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-detroit-gold mb-2">🚇 Transit Assistant</h1>
          <p className="text-gray-400">Real-time DDOT & SMART bus information</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-6 mb-6">
          <div className="flex gap-2 mb-6">
            <input
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              placeholder="Enter route number..."
              className="flex-1 bg-white/10 border border-detroit-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-detroit-gold"
            />
            <button
              onClick={searchTransit}
              disabled={loading}
              className="bg-detroit-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-detroit-gold/90 disabled:opacity-50 transition"
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </div>

          {results && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">🚌 Route {results.route} - Live Arrivals</h3>
                <div className="space-y-3">
                  {results.buses.map((bus: any) => (
                    <div key={bus.id} className="bg-white/10 rounded-lg p-4 flex justify-between items-center hover:bg-white/15 transition">
                      <div>
                        <p className="font-semibold text-lg">Bus #{bus.id}</p>
                        <p className="text-sm text-gray-400">→ {bus.destination}</p>
                        <p className="text-xs text-gray-500 mt-1">📍 {bus.lat.toFixed(4)}, {bus.lng.toFixed(4)}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-detroit-gold font-bold text-2xl">{bus.arrival}</div>
                        <div className="text-xs text-gray-400 mt-1">ETA</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">📍 Nearby Stops</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {results.stops.map((stop: any) => (
                    <div key={stop.id} className="bg-white/10 rounded-lg p-4">
                      <p className="font-semibold">{stop.name}</p>
                      <p className="text-xs text-gray-400 mb-2">Stop ID: {stop.id}</p>
                      <div className="flex gap-2 flex-wrap">
                        {stop.routes.map((r: string) => (
                          <span key={r} className="px-2 py-1 bg-detroit-gold/20 text-detroit-gold rounded text-xs">
                            Route {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-detroit-gold/20 rounded-xl p-4">
            <h3 className="font-bold mb-2">🚌 DDOT</h3>
            <p className="text-sm text-gray-400 mb-2">Detroit Department of Transportation</p>
            <p className="text-xs text-gray-500">Serving Detroit city routes</p>
          </div>
          <div className="bg-white/5 border border-detroit-gold/20 rounded-xl p-4">
            <h3 className="font-bold mb-2">🚍 SMART</h3>
            <p className="text-sm text-gray-400 mb-2">Suburban Mobility Authority</p>
            <p className="text-xs text-gray-500">Serving suburban routes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
