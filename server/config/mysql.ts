import mysql from 'mysql';
import { MYSQL } from './config';

const params = {
    user: MYSQL.user,
    password: MYSQL.password,
    db: MYSQL.db,
    host: MYSQL.host
}

const Connect = async () => (
    new Promise<mysql.Connection>((resolve, reject) => {
        const connection = mysql.createConnection(params);

        connection.connect((error) => {
            if(error){
                reject(error);
                return;
            }

            resolve(connection);
            console.log('database connected')
        });
    })
);

const Query = async (connection: mysql.Connection, query: string) => (
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if(error) {
                reject(error);
                return
            }

            resolve(result)
        });
    })
);

const sync = async(): Promise<void> => {
    new Promise(async (resolve, reject) => {
        const db = Connect()
      
        ;(await db).query('CREATE DATABASE bbrdatabase;', (error, result) => {
            if(error) {
                reject(error);
                console.error('error creating database', error)
                return
            }

            resolve(result)
            console.log('bbrdatabase created')
        });
    })
}

export { Connect, Query, sync }