const crypto = require('crypto');

function generateRandomId(length) {
  const randomId = crypto.randomUUID(0, length);
  return randomId;
}

console.log(generateRandomId(8));


