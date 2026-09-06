const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'ne-NP,ne;q=0.9,en;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const html = await fetchUrl('https://www.youtube.com/@manishjhanepal/videos');
  console.log('Channel HTML length:', html.length);
  
  // Extract video IDs and titles from ytInitialData
  const regex = /"videoRenderer":\{"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"title":\{"runs":\[\{"text":"([^"]+)"\}/g;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null && count < 30) {
    console.log(`[${match[1]}] ${match[2]}`);
    count++;
  }

  // Also check shorts tab
  const shortsHtml = await fetchUrl('https://www.youtube.com/@manishjhanepal/shorts');
  console.log('\nShorts HTML length:', shortsHtml.length);
  const shortsRegex = /"shortsLockupViewModel":\{"entityId":"[^"]+","accessibilityText":"([^"]+)","thumbnail":\{"sources":\[\{"url":"([^"]+)".*?"onTap":\{"innertubeCommand":\{"commandMetadata":\{"webCommandMetadata":\{"url":"\/shorts\/([a-zA-Z0-9_-]{11})"/g;
  let sMatch;
  let sCount = 0;
  while ((sMatch = shortsRegex.exec(shortsHtml)) !== null && sCount < 15) {
    console.log(`Short [${sMatch[3]}]: ${sMatch[1]}`);
    sCount++;
  }
}

run();
