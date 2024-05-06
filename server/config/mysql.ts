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

export { Connect, Query }