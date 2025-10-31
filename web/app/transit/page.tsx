'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Transit() {
  const [route, setRoute] = useState('');
  const [results, setResults] = useState<any>(null);

  const searchTransit = async () => {
    // Mock data - integrate with DetroitTransitKit
    setResults({
      route: route,
      buses: [
        { id: '1234', arrival: '5 min', destination: 'Downtown' },
        { id: '5678', arrival: '15 min', destination: 'Midtown' },
      ]
    });
  };

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
              placeholder="Enter route number or stop ID..."
              className="flex-1 bg-white/10 border border-detroit-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-detroit-gold"
            />
            <button
              onClick={searchTransit}
              className="bg-detroit-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-detroit-gold/90 transition"
            >
              Search
            </button>
          </div>

          {results && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Route {results.route}</h3>
              {results.buses.map((bus: any) => (
                <div key={bus.id} className="bg-white/10 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Bus #{bus.id}</p>
                    <p className="text-sm text-gray-400">{bus.destination}</p>
                  </div>
                  <div className="text-detroit-gold font-bold text-xl">
                    {bus.arrival}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!results && (
            <div className="text-center text-gray-400 py-12">
              <p>Enter a route number to see real-time arrivals</p>
              <p className="text-sm mt-2">Powered by DetroitTransitKit</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 border border-detroit-gold/20 rounded-xl p-4">
            <h3 className="font-bold mb-2">🚌 DDOT</h3>
            <p className="text-sm text-gray-400">Detroit Department of Transportation</p>
          </div>
          <div className="bg-white/5 border border-detroit-gold/20 rounded-xl p-4">
            <h3 className="font-bold mb-2">🚍 SMART</h3>
            <p className="text-sm text-gray-400">Suburban Mobility Authority</p>
          </div>
        </div>
      </div>
    </div>
  );
}
