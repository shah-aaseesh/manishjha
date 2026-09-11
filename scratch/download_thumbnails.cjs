const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'thumbnails');

const videoIds = [
  { id: 'opinion-1-bravo-delta-103', youtubeId: 'ALIL-7FXEO0' },
  { id: 'opinion-2-nepallive-parliament-weak', youtubeId: 'zgFUgLKuJcc' },
  { id: 'opinion-3-sbs-australia-diaspora', youtubeId: 'ZMOEzeG0u6s' },
  { id: 'opinion-4-yatri-talks-future-nepal', youtubeId: 'g4iNh8BXUBo' },
  { id: 'opinion-5-ndtv-dialogue-economy', youtubeId: 'KNaQMQzNSAQ' },
  { id: 'opinion-6-nepal-dialogue-policy', youtubeId: 'HzcSaV9kMoo' },
  { id: 'opinion-7-ratopati-leadership', youtubeId: 'MVUQYG_UwRs' },
  { id: 'opinion-8-khabarhub-geopolitics', youtubeId: '6X8FdGGddy0' },
  { id: 'opinion-9-parliament-address-budget', youtubeId: 'uswfTtoKwk0' },
  { id: 'opinion-10-madhesh-vision-conclave', youtubeId: '4ZOP8qYA7Pw' },
  { id: 'opinion-11-education-reform-speech', youtubeId: '4Krc1QCqtu4' },
  { id: 'short-1-parliamentary-oath', youtubeId: 'MsKKOvWb1Wo' },
  { id: 'short-2-youth-unemployment', youtubeId: 'co2MeleBuX0' },
  { id: 'short-3-anticorruption-stance', youtubeId: 'Rh3Z5I3P6Ww' },
  { id: 'short-4-madhesh-development', youtubeId: 'bP9_CUS9Vps' },
  { id: 'short-5-election-2084-vision', youtubeId: 'RfhX2KGolBM' },
  { id: 'short-6-digital-governance', youtubeId: '0o5TvhXGTn0' },
  { id: 'short-7-parliament-floor-response', youtubeId: '-e8GTtfE0T4' },
  { id: 'short-8-grassroots-connect', youtubeId: 'DHmJQTOTdSg' },
  { id: 'short-9-alternative-politics-rsp', youtubeId: 'LlE2DHaLhPU' },
  { id: 'hero-video-1', youtubeId: '6X8FdGGddy0' },
  { id: 'hero-video-2', youtubeId: 'yBbtG-CV-kk' },
  { id: 'hero-video-3', youtubeId: 'ddM92Atuttw' }
];

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(true));
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        downloadUrl(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        resolve(false);
      }
    }).on('error', (err) => {
      resolve(false);
    });
  });
}

async function fetchThumbnail(youtubeId, destPath) {
  const qualities = ['maxresdefault.jpg', 'hqdefault.jpg', 'mqdefault.jpg', 'default.jpg'];
  for (const q of qualities) {
    const url = `https://i.ytimg.com/vi/${youtubeId}/${q}`;
    const success = await downloadUrl(url, destPath);
    if (success) {
      const stats = fs.statSync(destPath);
      if (stats.size > 2000) {
        console.log(`[OK] Downloaded ${youtubeId} (${q}) -> ${stats.size} bytes`);
        return true;
      }
    }
  }
  return false;
}

async function main() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  console.log(`Starting thumbnail downloads to: ${targetDir}`);
  const fallbackSource = path.join(__dirname, '..', 'public', 'assets', 'images', 'photos', 'manish-speaking-mic.jpeg');

  for (const item of videoIds) {
    const fileName = `${item.youtubeId}.jpg`;
    const destPath = path.join(targetDir, fileName);
    const success = await fetchThumbnail(item.youtubeId, destPath);
    if (!success) {
      console.warn(`[FALLBACK] Using local fallback for ${item.youtubeId}`);
      if (fs.existsSync(fallbackSource)) {
        fs.copyFileSync(fallbackSource, destPath);
      }
    }
  }
  console.log('All thumbnails processed successfully.');
}

main();
