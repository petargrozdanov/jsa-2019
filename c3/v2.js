import { fstat } from "fs";

var fs = require(`fs`);

fs.writeFile(`test.txt`, `Node.js is the best!`, (err) => {
    if(err){
        console.error(err);
    }
});

// var pero = (cb) => {
//     for (var i = 0; i < 100; i++){
//         sum += i;
//     }
//     cb(sum);
// }
// var log = (num) => {
//     console.log(num);
// }

// pero(log);

// // pero((s) => {
// //     console.log(s);
// // });

fstat.readFile(`test.txt`, `utf8`, (err, data) => {
    if(err){
        console.error(err);
    }
    console.log(data);
})