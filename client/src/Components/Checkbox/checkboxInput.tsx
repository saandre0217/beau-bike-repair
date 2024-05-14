import React, { useState } from 'react';
import axios from 'axios';

export type CheckBoxInputObjModel = {
    key: number,
    label: string,
}

export interface CheckBoxInputProps {
    checkBoxObj: CheckBoxInputObjModel;
}
export const CheckBoxInput = (checkboxProps: CheckBoxInputObjModel) => {

const [value, setValue] = useState<boolean>(false)
console.log(checkboxProps.label, value, setValue)
return (
        <div >
            <div>{checkboxProps.label}</div>
            <input
                type='checkbox'
                onChange={() =>setValue(() => !value)}
            />
        
        </div>
    )
}