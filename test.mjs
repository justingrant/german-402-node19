import { strict as assert } from 'assert';
console.log(process.versions);
const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', { year: 'numeric', month: 'numeric' });
// This assertion passes in Node 18 and 19.2.0, but fails in Node 19.3.0.
assert.equal (germanMonthYearFormatter.format(new Date (1976, 10, 15)), '11.1976');

