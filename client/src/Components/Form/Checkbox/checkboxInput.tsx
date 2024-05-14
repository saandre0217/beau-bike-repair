import React, { useState } from 'react';
import axios from 'axios';

export type CheckBoxInputObjModel = {
    key: number,
    label: string,
    dbName: string,
    handleCheckBoxChange: (key:string) => void
}

export interface CheckBoxInputProps {
    checkBoxObj: CheckBoxInputObjModel;
}
export const CheckBoxInput = ({ key, label, dbName, handleCheckBoxChange = (key: string) => {} }: CheckBoxInputObjModel) => {

return (
        <div >
            <div>{label}</div>
            <input
                type='checkbox'
                onChange={() => handleCheckBoxChange(dbName)}
            />
        
        </div>
    )
}