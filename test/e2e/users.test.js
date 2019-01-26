require('../../config');

const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../../app/routes');

chai.use(chaiHttp);
const expect = chai.expect;



describe('Users', function() {  
	describe('search', function() {  
		it('should return users', async function() {
			const res = await chai.request(app).get('/users')
			
			expect(res).to.have.status(200);
			expect(res.body).to.eql([]);
  		});
	});

	describe('search', function() {  
		it('should create a user and return it', async function() {
			const res = await chai.request(app).post('/users').send({
				email: 'guy@guy.com'
			});
			expect(res).to.have.status(201);
			expect(res.body.email).to.eql('guy@guy.com');			
  		});
	});

});

