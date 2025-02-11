// i just want to find the sha value of the given input
const crypto = require('crypto');
function sha256Hash(data) {
    return crypto.createHash('sha256').update(String(parseInt(data, 10))).digest('hex');
}
sha256Hash(11316);