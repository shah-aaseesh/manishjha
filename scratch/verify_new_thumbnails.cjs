const https = require('https');

const newIds = ['6X8FdGGddy0', 'uswfTtoKwk0', '4ZOP8qYA7Pw'];

for (const id of newIds) {
  const url = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  https.get(url, res => {
    console.log(`[${id}] Status: ${res.statusCode}, Size: ${res.headers['content-length']}`);
  });
}
