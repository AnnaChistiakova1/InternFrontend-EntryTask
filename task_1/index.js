import { encoded, translations } from "./data.js";

const exceptions = ["_groupId_", "_service_", "_formatSize_", "_ca_"];
let uniqueID = [];
let i = 0;
let decoded = encoded;
decoded.forEach((item) => {
  for (let key in item) {
    if (translations[item[key]] == undefined) {
      uniqueID[i] = item[key];
      i += 1;
    } else if (
      !exceptions.includes(item) &&
      translations[item[key]] !== undefined
    ) {
      item[key] = translations[item[key]];
    }
  }
});

uniqueID = [...new Set(uniqueID)];

console.log('Раскодированные объекты:');
console.log(decoded);
console.log('Уникальные ID:');
console.log(uniqueID);