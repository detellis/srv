console.log('ELLIS1', typeof process.env.NODE_ENV);
console.log('ELLIS2', typeof 'production');

if (process.env.NODE_ENV === 'production' ) {
    console.log("PROD ENV", process.env.NODE_ENV);
    module.exports = require('./prod');
    return;
} else {
    console.log("DEV ENV", process.env.NODE_ENV);
    module.exports = require('./dev');
}
