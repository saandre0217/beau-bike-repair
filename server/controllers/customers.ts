import { NextFunction, Request, Response, response } from "express";
import { Connect, Query, use } from "../config/mysql";

const dbPromise = (queryStr: string, errorMsg: string) => {
    Connect()
    .then(connection => {
        Query(connection, queryStr)
        .then(data => {
            return response.status(200).send(data)
        })
        .catch(error => {
            console.error(errorMsg, error)
            return response.sendStatus(500)
        })
        .finally(() => connection.end())
    })
    .catch((error) => {
        console.error(errorMsg, error)
        return response.sendStatus(500)
    })
}

export const createCustomer = (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, phoneNumber, emailAddress } = req.body;

    let query = `INSERT INTO customers (firstName, lastName, phoneNumber, emailAddress) VALUES ("${firstName}", "${lastName}", "${phoneNumber}", "${emailAddress}")`

    use();
    return dbPromise(query, 'could not create customer')

}
