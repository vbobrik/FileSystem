const fs = require('fs-extra');
const path = require('path');

const pathToFile = 'Users/vbobrik/Desktop/aa/test.txt'
const pathToFolderFrom = 'Users/vbobrik/Desktop/aa';
const pathToFolderTo = 'Users/vbobrik/Desktop/aa/testFolder';
const pathToCopy = 'Users/vbobrik/Desktop/aa/testFolder/newFile.txt';
let fileName = 'file.txt'

let company = { // тот же самый объект, сжатый для краткости
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

//************************* */

fs.copy(pathToFile, pathToCopy)
.then(() => console.log('success'))
.catch(err => console.log(err));

let arr = [10, 11, 12];
let iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function * generator() {
    let i = 2;
    while(i<10) {
        yield i++;
    }
}
let nums = generator();
console.log(nums.next());
console.log(nums.next()); 

function printNumbers(from, to) {
    let i = from;
let timerId = setInterval(() => {
    if(i >= to) {
        clearInterval(timerId);
    }
    console.log(i)
    i++;
}, 1000);
}

printNumbers(2, 5);

// function printNumbers(from, to) {
//     let i = from;
//     setTimeout(function increase () {
//         console.log(i);
//         i++;
//         if(i < to) {
//             setTimeout(increase, 1000);
//         }
        
//     }, 1000)
// }

// printNumbers(6, 9);

async function copyFile() {
    try{
    await fs.copy(pathToFile, pathToCopy)
    console.log('success')
    } catch(err) {
        console.log(err);
        }
}

copyFile();

function createFolder() {
    return new Promise((resolve, reject) => {
      //Create a new directory. Returns relative path
      try {
        fs.mkdir('testFolder', err => {
          console.log('-----------create folder---------');
          if (err) {
            console.error(err);
            return reject;
          }
          return resolve();
        });
      }
      catch (err) {
        console.error(err);
      }
    })
  }

  createFolder().then(result => console.log(result));
  
  function open() {
    return new Promise((resolve, reject) => {
      console.log('-----------fill folder---------');
  
      fs.open(pathToFile, 'w', err => {
        if (err) {
          console.error(err);
          return reject;
        }
        return resolve();
      }).then(
        fs.open(`${pathToFile}\\${fileName}_second`, 'w', err => {
          if (err) {
            console.error(err);
            return reject;
          }
          return resolve();
        }))
    });
}
function openF() {
    return new Promise((resolve, reject) => { 
        fs.open('test.txt', 'w', err => {
            if (err) {
              console.error(err);
              return reject;
            }
            return resolve();
          })
    }
    )
}
openF().then(result => console.log(result));


  function readFolder() {
    return new Promise((resolve, reject) => {
  //Read content of any folder (files, subdirectories). Returns relatives pathes
  fs.readdir(pathToFolderFrom, (err, data) => {
    console.log('-----------read folder---------');
    if (err) {
      console.error(err);
      return reject;
    } 
    console.log(data);
    return resolve();
    });
    });
  }

  readFolder(pathToFolderFrom).then(result => console.log(result));

  async function allOperations(create, get, copy, open) {
    try {
      await create();
      await get();
      await copy();
      await open();
    }
    catch (err) {
      console.error(err);
      return err;
    }
  }
  allOperations(createFolder, getFolderAndFileNames, copy, open);

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);


function fib(n) {
  let a = 1;
  let b = 2;
let c = [1, 1, 2];
  for (let i = 1; c.length <= n; i++) {
    c.push(a + b);
    a = b;
    b = c[i];
  }
  return c[c.length - 1];
}
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
// ******---------*****


console.log('Hello world');
let test = 23;
console.log(typeof test);
test = 'hjk';
console.log(typeof test);

let bin =  [5, 8, 9, 8, 5];
function isPalindrom(bin) {
  console.log(bin.join())
  console.log(bin.reverse().join())
  return bin.join() == bin.reverse().join();
}

console.log(isPalindrom(bin));
 //Create a new directory. Returns relative path