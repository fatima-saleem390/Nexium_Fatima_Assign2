'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [urdu, setUrdu] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!url.trim()) {
      toast.error('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setSummary('');
    setUrdu('');

    try {
      const res = await fetch('/api/summarise', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json();

      if (res.ok) {
        setSummary(data.summary);
        setUrdu(data.urdu);
        
      } else {
        toast.error(data.error || 'Failed to summarise. Try a different URL.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please check the URL.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <Toaster position="top-center" />

      <div className="w-full max-w-xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-950 mb-2"> Blog Summariser</h1>
        <p className="text-black">Paste a blog URL below and get summaries in English & Urdu.</p>
      </div>

      <div className="w-full max-w-xl flex gap-4 mb-4">
        <Input
          placeholder="https://example.com/blog"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 shadow-sm border border-gray-300 h-12 text-lg px-4"
          disabled={loading}
        />
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white rounded-lg shadow flex items-center"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : null}
          {loading ? 'Processing...' : 'Summarise'}
        </Button>
      </div>

      {summary && (
        <Card className="w-full max-w-3xl mt-6 border border-gray-200 rounded-xl shadow-lg bg-blue-50 p-8">
          <CardContent>
            <h2 className="text-xl font-bold text-blue-950 mb-2 flex justify-between items-center">
              English Summary
              <Button
                className="ml-4 text-sm px-3 py-1 bg-white hover:bg-gray-200 text-black"
                onClick={() => copyToClipboard(summary, 'English summary')}
              >
                Copy
              </Button>
            </h2>
            <p className="text-black whitespace-pre-line text-lg">{summary}</p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-xl font-bold text-blue-950 mb-2 flex justify-between items-center">
              Urdu Summary
              <Button
                className="ml-4 text-sm px-3 py-1 bg-white hover:bg-gray-200 text-black"
                onClick={() => copyToClipboard(urdu, 'Urdu summary')}
              >
                Copy
              </Button>
            </h2>
            <p className="text-black whitespace-pre-line text-lg">{urdu}</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
