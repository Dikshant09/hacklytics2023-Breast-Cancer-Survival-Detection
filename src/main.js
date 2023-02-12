const { spawn } = require('child_process');
let data1;
const check = spawn('python',['main.py', [36.0, 1, 0.080353, 0.42638, 0.54715, 0.273680, 3, 1, 1, 1, 2, 2,]]);

check.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

check.stdout.on('data', function (data) {
  console.log(data1 = data);
  console.log(Buffer.from(data, "utf-8").toString());
});

check.on('close', (code) => {
  console.log(data1);
});