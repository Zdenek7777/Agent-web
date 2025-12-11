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
      <div className="p-8 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl">
            {agent.icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{agent.name}</h2>
            <p className="text-base text-gray-600 mt-1">{agent.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          {/* Instructions Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Jak to funguje:</h3>
            <div className="prose prose-sm max-w-none">
              <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                {agent.instructions}
              </pre>
            </div>
          </div>

          {/* Agent Content */}
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
            <div className="text-center py-16">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-4xl">
                  {agent.icon}
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900 mb-2">Tento agent bude brzy dostupný</p>
              <p className="text-sm text-gray-500">Zatím je k dispozici pouze Email Response Agent</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

