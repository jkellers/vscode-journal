import { replaceDateFormats, replaceUpcomingDays } from "../../util/dates";
import * as assert from 'assert';
import moment = require("moment");


let result: string = "no result";
result = replaceDateFormats("${year} and ${day}  and some ${month}", new Date());
console.log(result); 

result = replaceDateFormats("Local time ${localTime} and custom format ${d:YY} for year", new Date());
console.log(result); 

const goodCases = [["{:d+1}", "1"], ["{:d+11}", "11"], ["{:d+0}", "0"], ["{:d+9}", "9"], ["{:d+99}", "99"]];
const badCases = [["{:d-1}", "{:d-1}"], ["{:d-11}", "{:d-11}"], ["{:d+999}", "{:d+999}"], [":d+9", ":d+9"], ["{:d+9", "{:d+9"], [":d+9}", ":d+9}"], ["{d+ab}", "{d+ab}"]];

for (let entry of goodCases) {
    const weekday = parseInt(replaceUpcomingDays(entry[0]));
    const date = moment().add(parseInt(entry[1]), 'days');
    assert.strictEqual(weekday, date.date());
    console.log(date.date(), " === ", weekday);
}

for (let entry of badCases) {
    const weekday = replaceUpcomingDays(entry[0]);
    // the input is not modified and still contains the wrong identifier
    assert.ok(weekday.includes(entry[1]));
    console.log(entry[0], " === ", weekday);
}