const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    });
  });
}

async function run() {
  const html = await fetchUrl('https://www.youtube.com/@manishjhanepal/videos');
  const vids = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
  const unique = [...new Set(vids)];
  console.log('Unique video IDs found:', unique.length);

  for (const id of unique.slice(0, 20)) {
    const info = await new Promise(r => {
      https.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`, res => {
        let b = '';
        res.on('data', c => b += c);
        res.on('end', () => {
          try { r(JSON.parse(b)); } catch(e) { r({}); }
        });
      }).on('error', () => r({}));
    });
    console.log(`[${id}] "${info.title}" by ${info.author_name}`);
  }
}

run();
