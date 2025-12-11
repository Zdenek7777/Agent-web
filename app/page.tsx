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
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Sidebar 
        agents={agents} 
        selectedAgent={selectedAgent}
        onSelectAgent={setSelectedAgent}
      />
      <main className="flex-1 overflow-hidden">
        <AgentView agent={selectedAgent} />
      </main>
    </div>
  );
}

