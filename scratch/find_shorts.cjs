const https = require('https');

const shortsList = [
  { id: 1, title: 'संसदमा मनिष झा', length: 'Short', directId: '4Krc1QCqtu4', q: 'संसदमा मनिष झा 4Krc1QCqtu4' },
  { id: 2, title: 'सदनमा दोस्रो कार्यकालको पहिलो मन्तव्य', length: '5:49', q: 'सदनमा दोस्रो कार्यकालको पहिलो मन्तव्य मनिष झा' },
  { id: 3, title: 'राजनीतिको पनि राजनीतिक दायरा निर्धारण हुन आवश्यक छ', length: '1:52', q: 'राजनीतिको पनि राजनीतिक दायरा निर्धारण हुन आवश्यक छ मनिष झा' },
  { id: 4, title: 'समाज कल्याण परिषद् बारे मेरो धारणा', length: '6:59', q: 'समाज कल्याण परिषद् बारे मेरो धारणा मनिष झा' },
  { id: 5, title: 'विद्युत् बक्यौता तिर्नुपर्छ: NO IF, NO BUT', length: '7:01', q: 'विद्युत् बक्यौता तिर्नुपर्छ NO IF NO BUT मनिष झा' },
  { id: 6, title: 'पुराना काण्डहरूका फाइलहरू कहाँ छन्?', length: '5:30', q: 'पुराना काण्डहरूका फाइलहरू कहाँ छन् मनिष झा' },
  { id: 7, title: 'नेपाल अध्यात्मको राजधानी हो', length: '2:20', q: 'नेपाल अध्यात्मको राजधानी हो मनिष झा' },
  { id: 8, title: 'राज्यप्रतिको भरोसा र राष्ट्रप्रतिको आत्मविश्वास बनाउन आवश्यक छ', length: '8:57', q: 'राज्यप्रतिको भरोसा र राष्ट्रप्रतिको आत्मविश्वास बनाउन आवश्यक छ मनिष झा' },
  { id: 9, title: 'प्रश्न, प्रस्ताव र प्रस्तुति महत्वपूर्ण छ', length: '5:49', q: 'प्रश्न प्रस्ताव र प्रस्तुति महत्वपूर्ण छ मनिष झा' },
  { id: 10, title: 'सबै ठाउँमा राजनीति गर्नु गलत अभ्यास हो', length: '1:52', q: 'सबै ठाउँमा राजनीति गर्नु गलत अभ्यास हो मनिष झा' }
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
        resolve([...new Set(matches)].slice(0, 4));
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
  for (const item of shortsList) {
    console.log(`\n================================`);
    console.log(`Searching #${item.id}: "${item.title}" (${item.length})`);
    if (item.directId) {
      const info = await getInfo(item.directId);
      console.log(`Direct ID: [${item.directId}] "${info.title}" by ${info.author}`);
      continue;
    }
    const ids = await searchYoutube(item.q);
    for (const id of ids) {
      const info = await getInfo(id);
      console.log(`- [${id}] "${info.title}" by ${info.author}`);
    }
  }
}

run();
