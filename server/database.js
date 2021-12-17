const { Sequelize } = require('sequelize');

const NoteModel = require('./models/Note')

// Database connection
const sequelize = new Sequelize('<database>', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

const models = [NoteModel]

for(let model of models){
    model(sequelize)
}

module.exports = sequelize;