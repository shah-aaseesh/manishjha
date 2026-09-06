const https = require('https');

const shortsData = [
  {
    id: 'short-1',
    number: 1,
    title: 'संसदमा मनिष झा',
    length: 'Short',
    youtubeId: '4Krc1QCqtu4',
    channel: 'News24 Nepal'
  },
  {
    id: 'short-2',
    number: 2,
    title: 'सदनमा दोस्रो कार्यकालको पहिलो मन्तव्य',
    length: '5:49',
    youtubeId: 'MsKKOvWb1Wo',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-3',
    number: 3,
    title: 'राजनीतिको पनि राजनीतिक दायरा निर्धारण हुन आवश्यक छ',
    length: '1:52',
    youtubeId: 'co2MeleBuX0',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-4',
    number: 4,
    title: 'समाज कल्याण परिषद् बारे मेरो धारणा',
    length: '6:59',
    youtubeId: 'Rh3Z5I3P6Ww',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-5',
    number: 5,
    title: 'विद्युत् बक्यौता तिर्नुपर्छ: NO IF, NO BUT',
    length: '7:01',
    youtubeId: 'bP9_CUS9Vps',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-6',
    number: 6,
    title: 'पुराना काण्डहरूका फाइलहरू कहाँ छन्?',
    length: '5:30',
    youtubeId: 'RfhX2KGolBM',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-7',
    number: 7,
    title: 'नेपाल अध्यात्मको राजधानी हो',
    length: '2:20',
    youtubeId: '0o5TvhXGTn0',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-8',
    number: 8,
    title: 'राज्यप्रतिको भरोसा र राष्ट्रप्रतिको आत्मविश्वास बनाउन आवश्यक छ',
    length: '8:57',
    youtubeId: '-e8GTtfE0T4',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-9',
    number: 9,
    title: 'प्रश्न, प्रस्ताव र प्रस्तुति महत्वपूर्ण छ',
    length: '5:49',
    youtubeId: 'DHmJQTOTdSg',
    channel: 'Manish Jha Nepal'
  },
  {
    id: 'short-10',
    number: 10,
    title: 'सबै ठाउँमा राजनीति गर्नु गलत अभ्यास हो',
    length: '1:52',
    youtubeId: 'LlE2DHaLhPU',
    channel: 'Manish Jha Nepal'
  }
];

async function check(item) {
  return new Promise(resolve => {
    const url = `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`;
    https.get(url, res => {
      resolve({ id: item.id, status: res.statusCode, title: item.title, length: item.length });
    }).on('error', err => resolve({ id: item.id, error: err.message }));
  });
}

async function run() {
  for (const s of shortsData) {
    const r = await check(s);
    console.log(`[#${s.number}] (${s.length}) "${s.title}" -> ${s.youtubeId} : status ${r.status}`);
  }
}

run();
