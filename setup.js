const fs = require('fs');
const readline = require('readline');
const path = require('path');

const envPath = path.join(__dirname, '.env');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

if (fs.existsSync(envPath)) {
  rl.close();
  process.exit(0);
}

rl.question('JWT secret: ', (JWT_SECRET) => {
  rl.question('Mongo uri: ', (MONGODB_URI) => {
    const content = `JWT_SECRET=${JWT_SECRET}\nNODE_ENV=production\nMONGODB_URI=${MONGODB_URI}\n`;
    fs.writeFileSync(envPath, content);
    rl.close();
  });
});