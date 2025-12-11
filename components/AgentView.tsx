'use client';

import { useState } from 'react';
import { Agent } from '@/types/agent';
import EmailInput from './EmailInput';
import ResponseDisplay from './ResponseDisplay';

interface AgentViewProps {
  agent: Agent;
}

export default function AgentView({ agent }: AgentViewProps) {
  const [emailContent, setEmailContent] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcessEmail = async (content: string) => {
    setIsProcessing(true);
    setEmailContent(content);
    
    try {
      const res = await fetch('/api/process-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agentId: agent.id,
          emailContent: content,
        }),
      });

      if (!res.ok) {
        throw new Error('Chyba při zpracování emailu');
      }

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Omlouváme se, došlo k chybě při zpracování. Zkuste to prosím znovu.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className={`p-6 border-b ${
        agent.color === 'primary' 
          ? 'bg-gradient-to-r from-primary-50 to-primary-100/50' 
          : 'bg-gradient-to-r from-secondary-50 to-secondary-100/50'
      }`}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{agent.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{agent.name}</h2>
            <p className="text-sm text-gray-600 mt-1">{agent.description}</p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Instrukce:</h3>
        <div className="prose prose-sm max-w-none">
          <pre className="whitespace-pre-wrap text-sm text-gray-600 font-sans">
            {agent.instructions}
          </pre>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {agent.id === 'email-response' && (
            <>
              <EmailInput 
                onProcess={handleProcessEmail}
                isProcessing={isProcessing}
              />
              {response && (
                <ResponseDisplay 
                  response={response}
                  emailContent={emailContent}
                />
              )}
            </>
          )}
          
          {agent.id !== 'email-response' && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Tento agent bude brzy dostupný</p>
              <p className="text-sm mt-2">Zatím je k dispozici pouze Email Response Agent</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

