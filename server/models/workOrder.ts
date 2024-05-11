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

export const WorkOrder = db.define ('workOrder', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    progress: DataTypes.STRING,
    tuneUp: DataTypes.BOOLEAN,
    frontBreak: DataTypes.BOOLEAN,
    rearBreak: DataTypes.BOOLEAN,
    frontShift: DataTypes.BOOLEAN,
    rearShift: DataTypes.BOOLEAN,
    chain: DataTypes.BOOLEAN,
    bartape: DataTypes.BOOLEAN,
    headset: DataTypes.BOOLEAN,
    bottomBracket: DataTypes.BOOLEAN,
    wheelBarring: DataTypes.BOOLEAN,
    flat: DataTypes.BOOLEAN,
    replaceTire: DataTypes.BOOLEAN,
    tubeless: DataTypes.BOOLEAN,
    customerId: {
        type:DataTypes.INTEGER,
        references: {
            model: Customer,
            key: 'id'
        }
    }
  },
  {timestamps: true}
  );
  
  interface WorkOrder extends Model<InferAttributes<WorkOrder>, InferCreationAttributes<WorkOrder>>{
    id: CreationOptional<number>;
    progress: string;
    tuneUp: boolean;
    frontBreak: boolean;
    rearBreak: boolean;
    frontShift: boolean;
    rearShift: boolean;
    chain: boolean;
    bartape: boolean;
    headset: boolean;
    bottomBracket: boolean;
    wheelBarring: boolean;
    flat: boolean;
    replaceTire: boolean;
    tubeless: boolean;
    customerId: number;
  };