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
  const jsonStart = html.indexOf('var ytInitialData = ');
  if (jsonStart !== -1) {
    const jsonEnd = html.indexOf(';</script>', jsonStart);
    const jsonStr = html.substring(jsonStart + 'var ytInitialData = '.length, jsonEnd);
    try {
      const data = JSON.parse(jsonStr);
      const str = JSON.stringify(data);
      const matches = [...str.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"title":\{"runs":\[\{"text":"([^"]+)"\}/g)];
      console.log(`Found ${matches.length} video items on @manishjhanepal:`);
      for (const m of matches) {
        console.log(`- [${m[1]}] ${m[2]}`);
      }
    } catch (e) {
      console.log('JSON parse error:', e.message);
    }
  } else {
    console.log('ytInitialData not found');
  }
}

run();
