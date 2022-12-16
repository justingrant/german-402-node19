import { strict as assert } from 'assert';
const { equal } = assert;

import { Intl } from '@js-temporal/polyfill';

// May be an Intl bug: the de-AT date separator changed from "." to "/" in Node 19
const germanDateFormatter = new Intl.DateTimeFormat("de-AT", { dateStyle: "short" });
const germanDate = germanDateFormatter.format(new Date (1970,0,1));
equal (germanDate, '01.01.70');
