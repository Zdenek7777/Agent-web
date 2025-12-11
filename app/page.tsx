'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import AgentView from '@/components/AgentView';
import { Agent } from '@/types/agent';

const agents: Agent[] = [
  {
    id: 'email-response',
    name: 'Email Response Agent',
    description: 'Připraví profesionální odpověď na příchozí email',
    icon: '📧',
    instructions: `1. Vložte obsah emailu do textového pole níže (copy-paste nebo drag & drop .eml souboru)
2. Agent automaticky analyzuje email a identifikuje:
   - Od koho email přišel
   - Hlavní téma a dotaz
   - Tón a naléhavost
   - Potřebné informace pro odpověď
3. Agent připraví profesionální odpověď vhodnou pro danou situaci
4. Můžete odpověď upravit před odesláním`,
    color: 'primary',
  },
  {
    id: 'content-creation',
    name: 'Content Creation Agent',
    description: 'Vytvoří obsah pro sociální média, blogy nebo prezentace',
    icon: '✍️',
    instructions: `1. Popište, jaký obsah potřebujete vytvořit
2. Uveďte cílovou skupinu a účel obsahu
3. Agent navrhne strukturu a obsah
4. Můžete obsah upravit a vylepšit`,
    color: 'secondary',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis Agent',
    description: 'Analyzuje data a vytvoří přehledné reporty',
    icon: '📊',
    instructions: `1. Nahrajte soubor s daty (CSV, Excel, JSON)
2. Popište, jakou analýzu potřebujete
3. Agent provede analýzu a vytvoří report
4. Výsledky můžete exportovat nebo sdílet`,
    color: 'primary',
  },
  {
    id: 'automation',
    name: 'Automation Agent',
    description: 'Navrhne a vytvoří automatizaci pro opakující se úkoly',
    icon: '⚙️',
    instructions: `1. Popište úkol, který chcete automatizovat
2. Uveďte nástroje a systémy, které používáte
3. Agent navrhne workflow automatizace
4. Můžete automatizaci upravit a aktivovat`,
    color: 'secondary',
  },
];

export default function Home() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar 
        agents={agents} 
        selectedAgent={selectedAgent}
        onSelectAgent={setSelectedAgent}
      />
      <main className="flex-1 overflow-hidden bg-gray-50">
        {selectedAgent ? (
          <AgentView agent={selectedAgent} />
        ) : (
          <div className="h-full flex flex-col items-center justify-center p-8">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-lg"></div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Jak to jde?
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Vyberte AI agenta, který vám pomůže s vaším úkolem
              </p>
            </div>

            <div className="w-full max-w-6xl">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Co se vám nejvíc hodí?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-purple-200 group text-left"
                  >
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                        {agent.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {agent.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

