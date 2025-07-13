'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [urdu, setUrdu] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/summarise', {
      method: 'POST',
      body: JSON.stringify({ url }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setSummary(data.summary);
    setUrdu(data.urdu);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Blog Summariser</h1>

      <Input
        placeholder="Enter blog URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full max-w-md mb-4"
      />

      <Button onClick={handleSubmit}>Summarise</Button>

      {summary && (
        <Card className="w-full max-w-md mt-6">
          <CardContent>
            <h2 className="font-semibold mb-2">English Summary</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={5}
              value={summary}
              readOnly
            />
            <h2 className="font-semibold mt-4 mb-2">Urdu Summary</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={5}
              value={urdu}
              readOnly
            />
          </CardContent>
        </Card>
      )}
    </main>
  );
}
