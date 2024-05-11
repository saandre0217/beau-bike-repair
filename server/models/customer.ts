import {
    Sequelize,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from 'sequelize';

  import { db }from '../config/db'

  export const Customer = db.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  interface Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>> {
    id: CreationOptional<number>;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };




