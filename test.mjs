import { strict as assert } from 'assert';
console.log(process.versions);

const germanMonthYearFormatter1 = new Intl.DateTimeFormat('de-AT', { year: 'numeric', month: 'numeric' });
assert.equal (germanMonthYearFormatter1.format(new Date (1976, 0, 15)), '1.1976');


// This assertion passes on my local machine with Node 19.3.0 with ICU 71.1
// It fails with the same Node version in GH Actions that uses ICU 72.1
const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', { year: 'numeric', month: 'numeric' });
assert.equal (germanMonthYearFormatter.format(new Date (1976, 10, 15)), '11.1976');

/* 
Here's version info from my local machine (installed via `brew install node` on 2022-12-15),
where the error above doesn't happen.
{
  node: '19.3.0',
  v8: '10.8.168.21-node.8',
  uv: '1.44.2',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '111',
  nghttp2: '1.51.0',
  napi: '8',
  llhttp: '8.1.0',
  uvwasi: '0.0.13',
  openssl: '1.1.1s',
  cldr: '41.0',
  icu: '71.1',
  tz: '2022a',
  unicode: '14.0'
}

Here's version info in GitHub Actions CI (same date: 2022-12-15) where it fails:
{
  node: '19.3.0',
  v8: '10.8.168.21-node.8',
  uv: '1.44.2',
  zlib: '1.2.13',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '111',
  nghttp2: '1.51.0',
  napi: '8',
  llhttp: '8.1.0',
  uvwasi: '0.0.13',
  openssl: '3.0.7+quic',
  cldr: '42.0',
  icu: '72.1',
  tz: '2022f',
  unicode: '15.0',
  ngtcp2: '0.8.1',
  nghttp3: '0.7.0'
}
*/
