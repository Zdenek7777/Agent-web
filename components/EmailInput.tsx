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
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all ${
          isDragActive
            ? 'border-purple-400 bg-purple-50 scale-[1.02]'
            : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
            <svg
              className="h-8 w-8 text-gray-400"
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
          </div>
          <div>
            <p className="text-base font-medium text-gray-700">
              {isDragActive
                ? 'Pusťte soubor zde...'
                : 'Přetáhněte .eml soubor sem'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              nebo klikněte pro výběr souboru
            </p>
          </div>
          {fileName && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium mt-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {fileName}
            </div>
          )}
        </div>
      </div>

      <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm">
        <textarea
          value={textContent}
          onChange={(e) => setTextContent(e.target.value)}
          placeholder="Nebo vložte obsah emailu zde (copy-paste)..."
          className="w-full h-72 p-6 border-0 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none text-sm text-gray-700 placeholder-gray-400"
        />
        {textContent && (
          <div className="absolute bottom-4 right-4 text-xs text-gray-400 bg-white px-2 py-1 rounded">
            {textContent.length} znaků
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!textContent.trim() || isProcessing}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Zpracovávání...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Zpracovat email
          </>
        )}
      </button>
    </div>
  );
}

