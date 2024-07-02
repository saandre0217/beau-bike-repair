import {
    Model,
    DataTypes,
    Optional
  } from 'sequelize';

  import { db }from '../config/db'
  import { WorkOrder } from './workOrder';

  interface PhotoWorkOrderAttributes {
    id: number;
    path: string;
    workOrderid: number;
  }

  interface PhotoWorkOrderCreationAttributes 
    extends Optional<PhotoWorkOrderAttributes, 'id'> {}

  export interface PhotoWorkOrderInstance
    extends Model<PhotoWorkOrderAttributes, PhotoWorkOrderCreationAttributes>,
    PhotoWorkOrderAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

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
