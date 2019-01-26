const chai = require('chai')
const chaiHttp = require('chai-http');
const Umzug = require('umzug');

require('../config');
const models = require('../app/models');
const queryInterface = models.sequelize.getQueryInterface();
const migrationsPath = 'migrations';

chai.use(chaiHttp);

// globals
global.expect = chai.expect;


before(async function() {
    await queryInterface.dropAllTables();

    const umzug = new Umzug({
        storage: 'sequelize',
        storageOptions: {
            sequelize: models.sequelize
        },
        migrations: {
            params: [queryInterface, models.Sequelize],
            path: migrationsPath
        }
    });
    return umzug.up();
});

beforeEach(async function() {
    return models.Sequelize.Promise.each(
        Object.keys(models),
        (modelName) => {
            if (models.sequelize.isDefined(modelName)) {
                return models[modelName].destroy({
                    truncate: true,
                    cascade: true,
                    force: true
                });
            }
            else {
                return null;
            }
        }
    );  
});

after(function() {

});

afterEach(function() {

});