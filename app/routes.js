const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser');
const compression = require('compression');

const UsersController = require('./controllers/usersController')

const usersController = new UsersController();


app.use(cors())
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/users', (req, res) => {
	usersController.create(req.userContext, req.body).then((user) => {
        res.status(201).send(user);
    });
});

app.get('/users', (req, res) => {
	usersController.search(req.userContext).then((users) => {
        res.send(users);
    });
});

module.exports = app;