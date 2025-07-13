import { NextResponse } from 'next/server';
import { scrapeBlog, summariseText, translateToUrdu } from '@/lib/scraper';
import { connectMongo, Blog } from '@/lib/db';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
  const { url } = await req.json();

  // Scrape and summarise
  const fullText = await scrapeBlog(url);
  const summary = summariseText(fullText);
  const urdu = translateToUrdu(summary);

  // Save full text in Mongo
  await connectMongo();
  await Blog.create({ url, fullText });

  // Save summary in Supabase
  await supabase.from('summaries').insert([{ url, summary }]);

  return NextResponse.json({ summary, urdu });
}
