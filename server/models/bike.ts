import {
    Sequelize,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from 'sequelize';

  import { db }from '../config/db'
  import { Customer } from './customer';
  import { WorkOrder } from './workOrder';

export const Bike = db.define('bike', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    bikeYear: DataTypes.STRING,
    customerId: {
        type:DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'id'
        }
    },
    workOrderId: {
        type:DataTypes.INTEGER,
        references: {
            model: WorkOrder,
            key: 'id'
        }
    }
},
{timestamps: true}
);
interface Bike extends Model<InferAttributes<Bike>, InferCreationAttributes<Bike>>{
    id: CreationOptional<number>;
    make: string;
    model: string;
    bikeYear: string;
    customerId: number;
    workOrderId: number;
}