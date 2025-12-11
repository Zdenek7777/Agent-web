'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface EmailInputProps {
  onProcess: (content: string) => void;
  isProcessing: boolean;
}

export default function EmailInput({ onProcess, isProcessing }: EmailInputProps) {
  const [textContent, setTextContent] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const parseEmlFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const content = e.target?.result as string;
          
          // Parse .eml file content
          // Basic parsing - extract subject, from, to, body
          const lines = content.split('\n');
          let subject = '';
          let from = '';
          let to = '';
          let bodyStart = false;
          let body = '';

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            if (line.toLowerCase().startsWith('subject:')) {
              subject = line.substring(8).trim();
            } else if (line.toLowerCase().startsWith('from:')) {
              from = line.substring(5).trim();
            } else if (line.toLowerCase().startsWith('to:')) {
              to = line.substring(3).trim();
            } else if (line.trim() === '' && !bodyStart) {
              bodyStart = true;
              continue;
            }
            
            if (bodyStart) {
              body += line + '\n';
            }
          }

          const parsedContent = `Od: ${from}\nKomu: ${to}\nPředmět: ${subject}\n\n${body.trim()}`;
          resolve(parsedContent);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);
      if (file.name.endsWith('.eml')) {
        try {
          const parsedContent = await parseEmlFile(file);
          setTextContent(parsedContent);
        } catch (error) {
          console.error('Error parsing .eml file:', error);
          alert('Chyba při parsování .eml souboru');
        }
      } else {
        // Read text file
        const reader = new FileReader();
        reader.onload = (e) => {
          setTextContent(e.target?.result as string);
        };
        reader.readAsText(file);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'message/rfc822': ['.eml'],
      'text/plain': ['.txt'],
    },
    multiple: false,
  });

  const handleSubmit = () => {
    if (textContent.trim()) {
      onProcess(textContent);
    }
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-primary-400 bg-primary-50'
            : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-2">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm text-gray-600">
            {isDragActive
              ? 'Pusťte soubor zde...'
              : 'Přetáhněte .eml soubor sem nebo klikněte pro výběr'}
          </p>
          <p className="text-xs text-gray-400">
            Podporované formáty: .eml, .txt
          </p>
          {fileName && (
            <p className="text-xs text-primary-600 mt-2">✓ {fileName}</p>
          )}
        </div>
      </div>

      <div className="relative">
        <textarea
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="Nebo vložte obsah emailu zde (copy-paste)..."
          className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-mono text-sm"
        />
        {textContent && (
          <div className="absolute top-2 right-2 text-xs text-gray-400">
            {textContent.length} znaků
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!textContent.trim() || isProcessing}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
      >
        {isProcessing ? 'Zpracovávání...' : 'Zpracovat email'}
      </button>
    </div>
  );
}

