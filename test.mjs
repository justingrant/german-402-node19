import { strict as assert } from 'assert';
const { equal } = assert;

import { Intl } from '@js-temporal/polyfill';

const epoch = new Date (1970,0,1)

const optionsWithoutTimeZone = { year: 'numeric', month: 'numeric', calendar: 'gregory' };
const optionsWithTimeZone = { year: 'numeric', month: 'numeric', timeZone: "Europe/Vienna", calendar: 'gregory' };

// May be an Intl bug: the de-AT date separator changed from "." to "/" in Node 19
const germanMonthYearFormatter = new Intl.DateTimeFormat('de-AT', optionsWithoutTimeZone);
const germanMonthYear = germanMonthYearFormatter.format(new Date (1976, 10, 15));
equal (germanMonthYear, '11.1976');

