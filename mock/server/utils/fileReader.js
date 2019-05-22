const fs = require('fs');
const path = require('path');
module.exports = function fsReader (url) {
    var obj = fs.readFileSync(path.resolve(`./web/data${url}.json`))
    //console.log(JSON.parse(obj), 'obj--------------------------')
    return JSON.parse(obj)
}