// const fs = require("fs");
//
// fs.readFile("./test.txt", 'utf-8', (error, data) => {
//
//  fs.mkdirSync("./files", () => {});
//
//  fs.writeFileSync("./files/test2.txt", `${data}New text!`, (error) => {
//   error ? console.log(error) : null;
//  });
//
// });
//
// setTimeout(() => {
//  if (fs.existsSync("./files/test2.txt")) {
//   fs.unlink("./files/test2.txt", () => {});
//  }
// }, 4000);
// setTimeout(() => {
//  if (fs.existsSync("./files")) {
//   fs.rmdir("./files", () => {});
//  }
// }, 6000);
//
// //console.log("Just test!");

// ????

// const Logger = require('./log');
//
// const logger = new Logger();
//
// logger.on('some_event', (args) => {
//  const { id, text } = args;
//  console.log(id, text);
// });
//
// logger.log('User Logged!');


// ⭐⭐⭐⭐⭐⭐⭐⭐️ПОТОКИ⭐⭐⭐⭐⭐⭐⭐⭐
const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt');
const writeStream = fs.createWriteStream('./docs/new-text.txt');
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//   console.log('---------');
//   console.log(chunk.toString());
//   writeStream.write('\n ---CHUNK START--- \n');
//   writeStream.write(chunk);
//   writeStream.write('\n ---CHUNK END--- \n');
// });

const handleError = () => {
 console.log('Error');
 readStream.destroy();
 writeStream.end('Finished with error...');
};

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError);