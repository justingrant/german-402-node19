import { strict as assert } from 'assert';
const { equal } = assert;

import { Intl } from '@js-temporal/polyfill';

const epoch = new Date (1970,0,1)

// May be an Intl bug: the de-AT date separator changed from "." to "/" in Node 19
const germanDateFormatter = new Intl.DateTimeFormat("de-AT", { dateStyle: 'short', calendar: 'gregory' });
const germanDate = germanDateFormatter.format(epoch);
equal (germanDate, '01.01.70');

const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', { year: 'numeric', month: 'numeric', timeZone: "Europe/Vienna", calendar: 'gregory' });
const germanMonthYear = germanMonthYearFormatter.format(new Date (1976, 10, 15));
equal (germanMonthYear, '11.1976');

