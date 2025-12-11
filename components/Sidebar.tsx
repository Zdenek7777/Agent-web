'use client';

import { Agent } from '@/types/agent';

interface SidebarProps {
  agents: Agent[];
  selectedAgent: Agent | null;
  onSelectAgent: (agent: Agent | null) => void;
}

export default function Sidebar({ agents, selectedAgent, onSelectAgent }: SidebarProps) {
  return (
    <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-md"></div>
          <h1 className="text-xl font-bold text-gray-900">
            FAIL AI Agents
          </h1>
        </div>
        <p className="text-sm text-gray-500">AI asistenti pro vaši práci</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1 mb-6">
          <button
            onClick={() => onSelectAgent(null)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              selectedAgent === null
                ? 'bg-green-50 text-green-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Přehled</span>
          </button>
        </div>

        <div className="mb-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
            AI Agenti
          </h2>
          <div className="space-y-1">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => onSelectAgent(agent)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                  selectedAgent?.id === agent.id
                    ? 'bg-purple-50 text-purple-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{agent.icon}</span>
                <span className="text-sm">{agent.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* History section */}
        <div className="mt-8">
          <div className="px-4 mb-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Historie
            </h2>
          </div>
          <button className="w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Nová konverzace</span>
          </button>
        </div>
      </nav>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          Powered by FAIL Bootcamp
        </p>
      </div>
    </div>
  );
}

