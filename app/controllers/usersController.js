const models = require('../models');

class UsersController {

    async search(userContext) {
        const users = await models.user.findAll();
        return this._formatUsers(users);
    }

    async create(userContext, userPayload) {
        console.log(userPayload);
        const user = await models.user.create(userPayload);
        return this._formatUser(user);
    }

    async find(userContext, userId) {

    }

    async update(userContext, userId, userPayload) {

    }

    async destroy(userContext, userId) {

    }

    _formatUsers(users) {
        return users.map(this._formatUser);
    }

    _formatUser(user) {
        return {
            id: user.id, 
            name: user.name, 
            email: user.email, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt 
        }
    }
}

module.exports = UsersController;