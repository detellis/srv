if (process.env.NODE_ENV === 'production' ) {
    console.log("PROD ENV", process.env.NODE_ENV);
    module.exports = require('./prod');
} else {
    console.log("DEV ENV", process.env.NODE_ENV);
    module.exports = require('./dev');
}
