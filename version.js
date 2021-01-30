var compareVersions = require('compare-versions');


// function f() {
//     const latest = process.argv[2];
//     const current = process.argv[3];

//     compareVersions(latest, current);
// }
//  console.log(process.env.LATEST)


// const latest = process.argv[2];
// const current = process.argv[3];

// const ret = compareVersions(latest, current);

console.log("ret 1 : ", compareVersions("10.1.2", "10.1.1-charles"));