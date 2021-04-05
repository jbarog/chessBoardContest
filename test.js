var fs = require('fs');
const config = require('./config');
const customLog = require('./custom-log');

var results = {};
var files = fs.readdirSync(config.FILESPATH);
const PERFORMTESTSSIZES = Array(config.PERFORMANCENUMBEROFTESTS).fill(0).map(p=>config.PERFORMANCEMINBOARDSIZE+getRandomInt(config.PERFORMANCEMAXBOARDSIZE-config.PERFORMANCEMINBOARDSIZE));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkCorrect(fn,size) {
  console.log("-checking size "+size);
  const expected = config.TESTINGBOARDS[size];
  const generated = fn(size);
  if(generated===config.TESTINGBOARDS[size]){
    customLog('pass','success');
    return true;
  }else {
    customLog('fail','error');
    if(generated) {
      for(let i=0;i<generated.length;i++) {
        if(generated[i]!=expected[i]){
        }
      }
    }
    return false;
  }

}
function checkPerformance(fn,size) {
  var tInit = +(new Date);
  fn(size)
  var tEnd =  +(new Date);
  var tDiff = tEnd - tInit;
  return tDiff;
}
function performanceAvg(fn) {
  var sum = 0;
  for(let size of PERFORMTESTSSIZES){
    sum += checkPerformance(fn,size);
  }
  const avg = sum/config.PERFORMANCENUMBEROFTESTS;
  customLog(`Building boards sized in ${config.PERFORMANCEMINBOARDSIZE}|${config.PERFORMANCEMAXBOARDSIZE} range tooks ${avg} milliseconds in average.`,'info');
  return avg;
}
function shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function clearFn() {
  chessBoard = null;
}
function testFile(file,avoidDefaultPath) {
  console.log();
  if(typeof chessBoard === 'function' && chessBoard(2)) {
    customLog('existing fn','error');
  }
  console.log("testing: "+file);
  let isValid = true;
  const filePath = avoidDefaultPath?file:config.FILESPATH+'/'+file;
  const code = fs.readFileSync(filePath).toString();
  // console.log(code);
  eval(code);
  for (var size in config.TESTINGBOARDS) {
    let isPassed = checkCorrect(chessBoard,size);
    isValid = isValid && isPassed;
  }
  const performance = performanceAvg(chessBoard);
  results[file]={isValid,performance};
  //clear
  try {
    getNextSquare = null;
    chessBoard = null;
    console.log(chessBoard);
  } catch {
    customLog('Cleaning error','error');
  }
}
function shuffleTests(files) {
  shuffleArray(files).forEach((file)=>testFile(file));
  console.table(results);
}
var scriptArgs = process.argv.slice(2);
if(scriptArgs && scriptArgs[0]) {
  testFile(scriptArgs[0],true);
} else {
  shuffleTests(files);
}
