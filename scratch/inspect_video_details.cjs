const https = require('https');

const candidateIds = [
  'ALIL-7FXEO0',
  'w5xts9lolaI',
  'wa8B_XwW3Ng',
  'dhQoxFcQ_jo',
  'KNaQMQzNSAQ',
  'zgFUgLKuJcc',
  'ifQXvgE08Vg',
  'p4nL6nDhuKI',
  'Blt1d-C8jzc',
  'EQW4ZAK-bSI',
  '8EFJ0MAweQs',
  'g4iNh8BXUBo',
  'zg0PV0ETUqk',
  'LMEVOxLTZb8',
  '7hCtDWoIrTY',
  '3spgrgK0cWA',
  'nkh7gfcelJo',
  'HzcSaV9kMoo',
  '6X8FdGGddy0'
];

async function getVideoInfo(id) {
  return new Promise((resolve) => {
    const url = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ id, title: json.title, author: json.author_name, thumbnail: json.thumbnail_url });
        } catch (e) {
          resolve({ id, error: 'JSON parse error' });
        }
      });
    }).on('error', err => resolve({ id, error: err.message }));
  });
}

async function run() {
  for (const id of candidateIds) {
    const info = await getVideoInfo(id);
    console.log(`[${info.id}] Title: "${info.title}" | Author: ${info.author}`);
    console.log(`   Thumb: ${info.thumbnail}`);
  }
}

run();
