const https = require('https');

const queries = [
  { id: 1, title: 'The Bravo Delta Show with Manish Jha Bhusan Dahal EPI 103 AP1HD', q: 'The Bravo Delta Show Manish Jha Bhusan Dahal EPI 103' },
  { id: 2, title: 'संसद् बाहिरबाट देखिएको भन्दा भित्र झन् कमजोर रहेछ: मनिष झा Nepal Live', q: 'संसद् बाहिरबाट देखिएको भन्दा भित्र झन् कमजोर रहेछ मनिष झा Nepal Live' },
  { id: 3, title: 'विदेशमा रहेका नेपालीहरूलाई नेपाल फर्काउन हामी तयार भइसकेका छैनौँ SBS Nepali Manish Jha', q: 'विदेशमा रहेका नेपालीहरूलाई नेपाल फर्काउन हामी तयार भइसकेका छैनौँ मनिष झा' },
  { id: 4, title: 'Fireside Manish Jha Kantipur TV HD', q: 'Fireside Manish Jha Kantipur TV' },
  { id: 5, title: 'Manish Jha RSP and changing Nepals political culture AP1HD', q: 'Manish Jha Bravo Delta AP1HD RSP' },
  { id: 6, title: 'Manish Jha on Parliament and his experience as an MP Nepal Live', q: 'नयाँ सांसद नयाँ अनुभव मनिष झा Nepal Live' },
  { id: 7, title: 'RSP Candidate Manish Jha Ratopati Janakpur Ground Zero', q: 'Manish Jha Ratopati Janakpur' },
  { id: 8, title: 'Question to General Secretary candidate Manish Jha Kantipur', q: 'मनिष झा कान्तिपुर अन्तर्वार्ता महामन्त्री' }
];

async function fetchYoutubeResults(item) {
  return new Promise((resolve) => {
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(item.q)}`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9,ne;q=0.8'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const videoMatches = [...data.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map(m => m[1]);
        const uniqueIds = [...new Set(videoMatches)];
        
        // Find titles
        const items = [];
        const regex = /"videoRenderer":\{"videoId":"([a-zA-Z0-9_-]{11})"[^}]+"title":\{"runs":\[\{"text":"([^"]+)"\}/g;
        let match;
        while ((match = regex.exec(data)) !== null && items.length < 5) {
          items.push({ id: match[1], title: match[2] });
        }

        resolve({ item, uniqueIds: uniqueIds.slice(0, 5), items });
      });
    }).on('error', (err) => {
      resolve({ item, error: err.message });
    });
  });
}

async function run() {
  for (const q of queries) {
    const res = await fetchYoutubeResults(q);
    console.log(`\n========================================`);
    console.log(`Target: #${res.item.id} - ${res.item.title}`);
    console.log(`Query: ${res.item.q}`);
    if (res.items && res.items.length > 0) {
      console.log(`Matched Videos:`);
      res.items.forEach(v => {
        console.log(`  - ID: ${v.id} | Title: ${v.title} | https://www.youtube.com/watch?v=${v.id}`);
      });
    } else {
      console.log(`Fallback IDs found:`, res.uniqueIds);
    }
  }
}

run();
