import { Sequelize } from 'sequelize';
import { MYSQL } from './config';

const params = {
    user: MYSQL.user,
    password: MYSQL.password,
    db: MYSQL.db,
    host: MYSQL.host
}

export const db = new Sequelize(params.db, params.user, params.password, {
    host:params.host,
    dialect: 'mysql'
})
export const createDatabase = async (): Promise<void> => {
  try {
    await db.query('CREATE DATABASE "bbrdatabase";');
    console.info('Database created');
  } catch (error) {
    console.error('Error creating the database:', error);
  }
};
export const connection = async() => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
export const syncDatabase = async (): Promise<void> => {
  try {
    await db.sync({ force: false });
    console.info('Database synced!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

