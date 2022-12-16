import { strict as assert } from 'assert';
const { equal } = assert;

// May be an Intl bug: the de-AT date separator changed from "." to "/" in Node 19
const options = { year: 'numeric', month: 'numeric' };
const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', options);
const germanMonthYear = germanMonthYearFormatter.format(new Date (1976, 10, 15));
equal (germanMonthYear, '11.1976');

