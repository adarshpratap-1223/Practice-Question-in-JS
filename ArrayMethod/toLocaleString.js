const array = [1,"a",new Date("21 Dec 1997 14:12:00 UTC")];

const localeString = array.toLocaleString("en",{timeZone:"UTC"});
console.log(localeString);