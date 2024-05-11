import {
    Sequelize,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
  } from 'sequelize';

  import { db }from '../config/db'
  import { WorkOrder } from './workOrder';

  export const PhotoWorkOrder = db.define('photoWorkOrder', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    path: DataTypes.STRING,
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
interface PhotoWorkOrder extends Model<InferAttributes<PhotoWorkOrder>, InferCreationAttributes<PhotoWorkOrder>>{
    id: CreationOptional<number>;
    path: string;
    workOrderid: number;
}