import {
    Sequelize,
    Model,
    DataTypes,
    Optional
  } from 'sequelize';

  import { db }from '../config/db'
  export interface AdminAttributes {
    id: number;
    username: string;
    password: string;
  }

  interface AdminCreationAttributes 
    extends Optional<AdminAttributes, 'id'> {}

  export interface AdminInstance
    extends Model<AdminAttributes, AdminCreationAttributes>,
    AdminAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }


  export const Admin = db.define<AdminInstance>('Admin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

 
