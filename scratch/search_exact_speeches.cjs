const https = require('https');

const titles = [
  'सदनमा दोस्रो कार्यकालको पहिलो मन्तव्य',
  'राजनीतिको पनि राजनीतिक दायरा निर्धारण हुन आवश्यक छ',
  'समाज कल्याण परिषद् बारे मेरो धारणा',
  'विद्युत् बक्यौता तिर्नुपर्छ',
  'पुराना काण्डहरूका फाइलहरू कहाँ छन्',
  'नेपाल अध्यात्मको राजधानी हो',
  'राज्यप्रतिको भरोसा र राष्ट्रप्रतिको आत्मविश्वास बनाउन आवश्यक छ',
  'प्रश्न, प्रस्ताव र प्रस्तुति महत्वपूर्ण छ',
  'सबै ठाउँमा राजनीति गर्नु गलत अभ्यास हो'
];

async function searchExact(t) {
  return new Promise((resolve) => {
    const q = `"${t}" "मनिष झा"`;
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'ne-NP,ne;q=0.9,en;q=0.8'
      }
    }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const matches = [...d.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
        resolve({ title: t, ids: [...new Set(matches)].slice(0, 3) });
      });
    }).on('error', () => resolve({ title: t, ids: [] }));
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
  for (const t of titles) {
    const res = await searchExact(t);
    console.log(`\n=== "${t}" ===`);
    for (const id of res.ids) {
      const info = await getInfo(id);
      console.log(`  - [${id}] "${info.title}" by ${info.author}`);
    }
  }
}

run();
