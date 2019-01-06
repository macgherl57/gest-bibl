const crypto = require('crypto');
var hash = crypto.createHash('sha1').update('TreSuperSeghe').digest('hex');
console.log(hash);
console.log(String.length(hash));