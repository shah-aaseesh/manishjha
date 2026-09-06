const https = require('https');

const queries = [
  'SBS Nepali Manish Jha',
  'We are not ready to bring back Nepalis living in abroad Manish Jha',
  'Ratopati Manish Jha Janakpur',
  'Ratopati Manish Jha Ground Zero',
  'महामन्त्रीका उम्मेदवार मनिष झालाई प्रश्न कान्तिपुर',
  'Manish Jha Kantipur interview'
];

async function searchYoutube(q) {
  return new Promise((resolve) => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
        resolve({ q, ids: [...new Set(matches)].slice(0, 6) });
      });
    }).on('error', err => resolve({ q, ids: [], error: err.message }));
  });
}

async function getInfo(id) {
  return new Promise((resolve) => {
    https.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          resolve({ id, title: j.title, author: j.author_name, thumb: j.thumbnail_url });
        } catch (e) {
          resolve({ id, title: 'Unknown' });
        }
      });
    }).on('error', () => resolve({ id, title: 'Error' }));
  });
}

async function run() {
  for (const q of queries) {
    const res = await searchYoutube(q);
    console.log(`\n=== Query: ${q} ===`);
    for (const id of res.ids) {
      const info = await getInfo(id);
      console.log(`- [${id}] ${info.title} (${info.author})`);
    }
  }
}

run();
