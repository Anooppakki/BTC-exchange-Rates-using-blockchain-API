const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter value in INR ', (answer) => {

  const hey = https.get('https://blockchain.info/tobtc?currency=INR&value=' + answer, (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });

  }).on('error', (e) => {
    console.error(e);
  });
  console.log(hey);

  rl.close();
});
