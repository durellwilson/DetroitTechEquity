'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';

export default function CareerCoach() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-detroit-blue via-slate-900 to-black text-white">
      <nav className="border-b border-detroit-gold/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-detroit-gold hover:underline">← Back to Home</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-detroit-gold mb-2">🎯 AI Career Coach</h1>
          <p className="text-gray-400">Get personalized Swift & automotive tech career guidance</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-detroit-gold/20 rounded-xl p-6 mb-6 h-[500px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <p className="text-xl mb-4">Ask me about:</p>
              <ul className="space-y-2">
                <li>• Swift career paths in automotive</li>
                <li>• Detroit tech companies hiring</li>
                <li>• Learning resources for CarPlay development</li>
                <li>• Breaking into mobility tech</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${
                    m.role === 'user' 
                      ? 'bg-detroit-gold text-black' 
                      : 'bg-white/10 text-white'
                  }`}>
                    <p className="whitespace-pre-wrap">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-detroit-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-detroit-gold rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-detroit-gold rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about Swift careers in Detroit..."
            className="flex-1 bg-white/10 border border-detroit-gold/30 rounded-lg px-4 py-3 focus:outline-none focus:border-detroit-gold"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-detroit-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-detroit-gold/90 disabled:opacity-50 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
