import { Sequelize } from 'sequelize';

const seq = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' //Par rapport à où on lance node
});

export default seq;