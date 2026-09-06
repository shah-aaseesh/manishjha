import http from 'http';

const urls = [
  'http://localhost:5173/',
  'http://localhost:5173/src/main.jsx',
  'http://localhost:5173/src/App.jsx',
  'http://localhost:5173/src/pages/BiographyPage.jsx',
  'http://localhost:5173/src/pages/ContactPage.jsx',
  'http://localhost:5173/src/index.css',
  'http://localhost:5173/assets/images/logo.png',
  'http://localhost:5173/assets/images/logo-transparent.png',
  'http://localhost:5173/assets/images/profile.jpg',
  'http://localhost:5173/assets/images/interview-main.jpg'
];

let completed = 0;
let errors = 0;

urls.forEach(url => {
  http.get(url, res => {
    let size = 0;
    res.on('data', chunk => size += chunk.length);
    res.on('end', () => {
      console.log(`[STATUS ${res.statusCode}] ${res.headers['content-type']} (${size} bytes) - ${url}`);
      if (res.statusCode !== 200 || size === 0) errors++;
      completed++;
      if (completed === urls.length) {
        console.log(`\nVerification finished: ${completed - errors}/${completed} OK. Errors: ${errors}`);
      }
    });
  }).on('error', err => {
    console.error(`FAILED: ${url} -> ${err.message}`);
    errors++;
    completed++;
  });
});
