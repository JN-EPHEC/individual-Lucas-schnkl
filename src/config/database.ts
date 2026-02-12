import { Sequelize } from 'sequelize';

const seq = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

export default seq;