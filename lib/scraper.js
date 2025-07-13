import axios from 'axios';
import { load } from 'cheerio';

// Scrape blog HTML and extract paragraphs
export async function scrapeBlog(url) {
  const { data } = await axios.get(url);
  const $ = load(data);

  let text = '';
  $('p').each((i, el) => {
    text += $(el).text() + ' ';
  });

  return text.trim();
}

// Simple static logic summariser
export function summariseText(text) {
  const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
  return sentences.slice(0, 2).join('. ') + '.';
}

// Static JS dictionary for simple Urdu translation
export function translateToUrdu(english) {
  const dictionary = {
    'the': 'یہ',
    'and': 'اور',
    'to': 'کو',
    'about': 'کے بارے میں',
    'browser': 'براؤزر',
    'news': 'خبریں',
    'tips': 'مشورے',
    'make': 'بنائیں',
    'your': 'آپ کا',
    'experience': 'تجربہ',
    'work': 'کام',
    'best': 'بہترین'
  };

  let urdu = english.split(' ').map(word => {
    const clean = word.toLowerCase().replace(/[^a-z]/gi, '');
    return dictionary[clean] ? dictionary[clean] : word;
  }).join(' ');

  return `اردو: ${urdu}`;
}
