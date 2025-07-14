import axios from 'axios';
import { load } from 'cheerio';
import { urduDictionary } from './dictionary';

// Scrape blog HTML and extract multiple paragraphs
export async function scrapeBlog(url) {
  const { data } = await axios.get(url);
  const $ = load(data);

  const paragraphs = [];
  $('p').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length >= 20 && /[.!?]/.test(text)) {
      paragraphs.push(text);
    }
  });

  const text = paragraphs.join(' ');
  return text.trim();
}

// Better summariser: take 10–12 sentences in one paragraph
export function summariseText(text) {
  const sentences = text.split(/(?<=[.?!])\s+/).filter(Boolean);
  const summarySentences = sentences.slice(0, 12); // take up to 12
  return summarySentences.join(' ').trim();
}

// Urdu translation (no Urdu prefix)
export function translateToUrdu(english) {
  const urdu = english.split(' ').map(word => {
    const clean = word.toLowerCase().replace(/[^a-z]/gi, '');
    const base = clean.endsWith('s') ? clean.slice(0, -1) : clean;
    return urduDictionary[clean] || urduDictionary[base] || word;
  }).join(' ');

  return urdu;
}