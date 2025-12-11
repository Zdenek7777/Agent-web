'use client';

import { useState } from 'react';

interface ResponseDisplayProps {
  response: string;
  emailContent: string;
}

export default function ResponseDisplay({ response, emailContent }: ResponseDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Původní email:</h3>
        <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-gray-200 max-h-48 overflow-y-auto">
          {emailContent}
        </pre>
      </div>

      <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border-2 border-primary-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Navržená odpověď:</h3>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
          >
            {copied ? '✓ Zkopírováno' : 'Kopírovat'}
          </button>
        </div>
        <div className="prose prose-sm max-w-none">
          <pre className="whitespace-pre-wrap text-gray-700 font-sans bg-white p-4 rounded border border-gray-200">
            {response}
          </pre>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          ✓ Použít odpověď
        </button>
        <button className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
          Upravit
        </button>
      </div>
    </div>
  );
}

