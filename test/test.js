var assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Index', function() {  
	it('should return 200', function(done) {
		request(app)
			.get('/')
		  	.expect(200)
		  	.expect('Hello Guy!')
		  	.end(done);
  	});  
});

