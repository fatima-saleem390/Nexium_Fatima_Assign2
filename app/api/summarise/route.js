import axios from 'axios';
import { load } from 'cheerio';
import { urduDictionary } from '../../../lib/dictionary';

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'No URL provided.' }), { status: 400 });
    }

    const fullText = await scrapeBlog(url);
    const summary = summariseText(fullText);
    const urdu = translateToUrdu(summary);

    return new Response(JSON.stringify({ summary, urdu }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Something went wrong.' }), { status: 500 });
  }
}

// ✅ Scrape blog HTML and extract paragraphs as a single paragraph
export async function scrapeBlog(url) {
  const { data } = await axios.get(url);
  const $ = load(data);

  const paragraphs = [];
  $('p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 30) paragraphs.push(text);
  });

  return paragraphs.join(' '); // 🔑 Single paragraph
}

// ✅ Shorten to ~10–12 sentences as one block
export function summariseText(text) {
  const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
  const limited = sentences.slice(0, 12).join('. ');
  return limited + (limited.endsWith('.') ? '' : '.');
}

// ✅ Translate to Urdu using simple dictionary
export function translateToUrdu(text) {
  let translated = text;
  for (const [eng, urdu] of Object.entries(urduDictionary)) {
    const regex = new RegExp(`\\b${eng}\\b`, 'gi');
    translated = translated.replace(regex, urdu);
  }
  return translated;
}
