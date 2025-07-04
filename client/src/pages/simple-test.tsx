import { useState } from 'react';
import { getImageUrl } from "@/lib/image-utils";

export default function SimpleTest() {
  const [testResults, setTestResults] = useState<string[]>([]);
  
  const addResult = (result: string) => {
    setTestResults(prev => [...prev, result]);
  };

  const testDirectUrl = async () => {
    const url = `${window.location.origin}/test-image`;
    addResult(`Testing direct URL: ${url}`);
    
    try {
      const response = await fetch(url);
      addResult(`✓ Fetch response: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        const blob = await response.blob();
        addResult(`✓ Image blob size: ${blob.size} bytes, type: ${blob.type}`);
      }
    } catch (error) {
      addResult(`✗ Fetch error: ${error}`);
    }
  };

  const testImageElement = () => {
    const img = new Image();
    const url = `${window.location.origin}/test-image`;
    
    addResult(`Testing image element: ${url}`);
    
    img.onload = () => {
      addResult(`✓ Image loaded: ${img.width}x${img.height}`);
    };
    
    img.onerror = (error) => {
      addResult(`✗ Image error: ${error}`);
    };
    
    img.src = url;
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-2xl mb-4">Test Simple - Images Mobile</h1>
      
      <div className="mb-4 p-4 border border-cyan-500 rounded">
        <h2 className="text-lg mb-2">Info Environment:</h2>
        <div className="text-sm">
          <p>Origin: {window.location.origin}</p>
          <p>Host: {window.location.host}</p>
          <p>Protocol: {window.location.protocol}</p>
        </div>
      </div>

      <div className="mb-4">
        <button 
          onClick={testDirectUrl}
          className="bg-cyan-500 text-black px-4 py-2 rounded mr-2"
        >
          Test Direct URL
        </button>
        <button 
          onClick={testImageElement}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Test Image Element
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg mb-2">Image Test:</h3>
        <div className="w-48 h-48 border border-gray-500 bg-gray-900">
          <img 
            src={`${window.location.origin}/test-image`}
            alt="Test"
            className="w-full h-full object-cover"
            onLoad={() => addResult(`✓ IMG element loaded successfully`)}
            onError={() => addResult(`✗ IMG element failed to load`)}
          />
        </div>
      </div>

      <div className="border border-cyan-500 rounded p-4">
        <h3 className="text-lg mb-2">Résultats Test:</h3>
        <div className="text-sm space-y-1">
          {testResults.map((result, index) => (
            <div key={index} className="font-mono">
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}