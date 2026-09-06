const https = require('https');

const thumbnails = [
  { id: 1, url: 'https://i.ytimg.com/vi/ALIL-7FXEO0/hqdefault.jpg' },
  { id: 2, url: 'https://i.ytimg.com/vi/zgFUgLKuJcc/hqdefault.jpg' },
  { id: 3, url: 'https://i.ytimg.com/vi/ZMOEzeG0u6s/hqdefault.jpg' },
  { id: 4, url: 'https://i.ytimg.com/vi/g4iNh8BXUBo/hqdefault.jpg' },
  { id: 5, url: 'https://i.ytimg.com/vi/KNaQMQzNSAQ/hqdefault.jpg' },
  { id: 6, url: 'https://i.ytimg.com/vi/HzcSaV9kMoo/hqdefault.jpg' },
  { id: 7, url: 'https://i.ytimg.com/vi/MVUQYG_UwRs/hqdefault.jpg' },
  { id: 8, url: 'https://i.ytimg.com/vi/GA0xyiILYw0/hqdefault.jpg' }
];

async function checkUrl(item) {
  return new Promise(resolve => {
    https.get(item.url, res => {
      resolve({ id: item.id, status: res.statusCode, length: res.headers['content-length'] });
    }).on('error', err => resolve({ id: item.id, error: err.message }));
  });
}

async function run() {
  for (const item of thumbnails) {
    const res = await checkUrl(item);
    console.log(`Thumbnail ${res.id} (${item.url}): status=${res.status}, size=${res.length}`);
  }
}

run();
