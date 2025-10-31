import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-detroit-blue via-slate-900 to-black text-white">
      <nav className="border-b border-detroit-gold/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-detroit-gold">🏭 Detroit Tech Equity</h1>
          <div className="space-x-4">
            <Link href="/career-coach" className="hover:text-detroit-gold transition">Career Coach</Link>
            <Link href="/transit" className="hover:text-detroit-gold transition">Transit</Link>
            <Link href="/community" className="hover:text-detroit-gold transition">Community</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-detroit-gold via-detroit-red to-detroit-gold bg-clip-text text-transparent">
            Building the Future of Mobility
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Detroit's premier Swift development community connecting automotive innovators, 
            tech entrepreneurs, and developers to build next-generation mobility solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Link href="/career-coach" className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-8 hover:border-detroit-gold transition">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-detroit-gold transition">AI Career Coach</h3>
                <p className="text-gray-400">Get personalized Swift career guidance for automotive tech</p>
              </div>
            </Link>

            <Link href="/transit" className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-8 hover:border-detroit-gold transition">
                <div className="text-4xl mb-4">🚇</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-detroit-gold transition">Transit Assistant</h3>
                <p className="text-gray-400">Real-time DDOT & SMART bus information</p>
              </div>
            </Link>

            <Link href="/community" className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-8 hover:border-detroit-gold transition">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-detroit-gold transition">Community Hub</h3>
                <p className="text-gray-400">Connect with Detroit developers and mentors</p>
              </div>
            </Link>
          </div>

          <div className="mt-16 space-y-4">
            <h3 className="text-3xl font-bold">🚀 Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['CarPlay', 'EV Charging', 'Fleet Management', 'IoT', 'Manufacturing AI', 'Smart City'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-detroit-blue/50 border border-detroit-gold/30 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
