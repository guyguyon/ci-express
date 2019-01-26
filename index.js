'use strict';

require('./config');

const app = require('./app/routes');
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`My app is listening on port ${port}!`)
});