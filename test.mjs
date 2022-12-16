import { strict as assert } from 'assert';
const { equal } = assert;

// May be an Intl bug: the de-AT date separator changed from "." to "/" in Node 19
const germanDateFormatter = new Intl.DateTimeFormat("de-AT", { dateStyle: "short", timeZone: 'UTC' });
const germanDate = germanDateFormatter.format(0);
equal (germanDate, '01.01.70');