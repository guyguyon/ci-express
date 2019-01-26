# ci-express

A node.js app

Using:
* ORM - Sequelize
* DB - Postgres
* Config manager - Dotenv
* 


## Installation

### Pre requirements:
* Node.js
* Postgres

### Steps:

1. Install dependencies - `npm install`
2. Create .env file - `cp .env.template .env` and fill the file with your keys
3. Create DB - `npm run db:create`
4. Run migrations - `npm run db:migrate`
5. Make sure all tests are passing - `npm run tests`
6. Start your app - `npm run start`