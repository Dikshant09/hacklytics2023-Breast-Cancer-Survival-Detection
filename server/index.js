const express = require('express');
const app = express();
const cors = require('cors');
const { spawn } = require('child_process');

app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
  })
)

app.get('/result', (req, res) => {
    let data1;
    const check = spawn('python',['main.py', req.query.ans]);
    
    check.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    check.stdout.on('data', function (data) {
      console.log(data1 = data);
      console.log(Buffer.from(data, "utf-8").toString());
    });
    
    check.on('close', (code) => {
        res.send(data1);
    });
})

app.listen(4500, () => {
    console.log('Server running on port 4500');
})