const https = require('https');

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
        resolve([...new Set(matches)]);
      });
    }).on('error', () => resolve([]));
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
  const ids = await searchYoutube('Manish Jha MP interview');
  console.log('Found IDs:', ids.length);
  for (const id of ids.slice(0, 15)) {
    const info = await getInfo(id);
    console.log(`[${id}] "${info.title}" by ${info.author}`);
  }
}

run();
