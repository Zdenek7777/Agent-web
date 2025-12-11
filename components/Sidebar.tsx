'use client';

import { Agent } from '@/types/agent';

interface SidebarProps {
  agents: Agent[];
  selectedAgent: Agent;
  onSelectAgent: (agent: Agent) => void;
}

export default function Sidebar({ agents, selectedAgent, onSelectAgent }: SidebarProps) {
  return (
    <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          FAIL AI Agents
        </h1>
        <p className="text-sm text-gray-500 mt-1">Vyberte agenta</p>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => onSelectAgent(agent)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
              selectedAgent.id === agent.id
                ? `bg-gradient-to-r ${
                    agent.color === 'primary'
                      ? 'from-primary-100 to-primary-50'
                      : 'from-secondary-100 to-secondary-50'
                  } border-2 ${
                    agent.color === 'primary'
                      ? 'border-primary-300'
                      : 'border-secondary-300'
                  } shadow-sm`
                : 'hover:bg-gray-50 border-2 border-transparent'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{agent.icon}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm">
                  {agent.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {agent.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <p className="text-xs text-gray-400 text-center">
          Powered by FAIL Bootcamp
        </p>
      </div>
    </div>
  );
}

