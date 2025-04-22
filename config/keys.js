if (process.env.NODE_ENV === 'production' ) {
    console.log("ELLIS", process.env.NODE_ENV);
    module.exports = require('./prod');
} else {
    console.log("ELLIS", process.env.NODE_ENV);
    module.exports = require('./dev');
}
