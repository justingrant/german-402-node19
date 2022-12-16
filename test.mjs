import { strict as assert } from 'assert';
const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', { year: 'numeric', month: 'numeric' });
// This assertion passes in Node 18, fails in Node 19.2.0. But only in GH actions. Works OK in my local Node 19.2.0.
assert.equal (germanMonthYearFormatter.format(new Date (1976, 10, 15)), '11.1976');

