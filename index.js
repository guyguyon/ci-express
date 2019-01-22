'use strict';

const app = require('./app.js');
const port = 3000;

app.listen(port, () => {
	console.log(`My CI app listening on port ${port}!`)
});