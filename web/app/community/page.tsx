'use client';

import Link from 'next/link';

const mentors = [
  { name: 'Sarah Johnson', expertise: 'CarPlay Development', available: true },
  { name: 'Marcus Williams', expertise: 'EV Charging Systems', available: true },
  { name: 'Lisa Chen', expertise: 'Manufacturing IoT', available: false },
];

const events = [
  { title: 'Swift for Automotive Meetup', date: 'Nov 15, 2025', location: 'TechTown Detroit' },
  { title: 'CarPlay Workshop', date: 'Nov 22, 2025', location: 'Virtual' },
  { title: 'Hacktoberfest Wrap-up', date: 'Nov 30, 2025', location: 'WeWork Detroit' },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-detroit-blue via-slate-900 to-black text-white">
      <nav className="border-b border-detroit-gold/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-detroit-gold hover:underline">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-detroit-gold mb-2">🤝 Community Hub</h1>
          <p className="text-gray-400">Connect with Detroit developers and mentors</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">👥 Available Mentors</h2>
            <div className="space-y-3">
              {mentors.map((mentor, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{mentor.name}</p>
                    <p className="text-sm text-gray-400">{mentor.expertise}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    mentor.available 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {mentor.available ? 'Available' : 'Busy'}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-detroit-gold text-black py-2 rounded-lg font-semibold hover:bg-detroit-gold/90 transition">
              Request Mentorship
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">📅 Upcoming Events</h2>
            <div className="space-y-3">
              {events.map((event, i) => (
                <div key={i} className="bg-white/10 rounded-lg p-4">
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <p className="text-sm text-detroit-gold">{event.location}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-detroit-gold text-black py-2 rounded-lg font-semibold hover:bg-detroit-gold/90 transition">
              View All Events
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Join Our Community</h2>
          <p className="text-gray-400 mb-6">
            Connect with 500+ Detroit developers building the future of mobility
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-detroit-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-detroit-gold/90 transition">
              Join Slack
            </button>
            <button className="border border-detroit-gold text-detroit-gold px-6 py-3 rounded-lg font-semibold hover:bg-detroit-gold/10 transition">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
