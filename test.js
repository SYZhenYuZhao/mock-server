var fs = require('fs')

fs.readFile('./package.json','utf8',function(error,data){
	if(error){
		return console.log(error)
	}
	console.log(JSON.parse(data).author)
})
