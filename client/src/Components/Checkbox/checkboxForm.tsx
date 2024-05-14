import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { CheckBoxInput } from './checkboxInput';
import { checkBoxLabels as cbLabelObjArr }  from '../questionData';
export const CheckBoxForm = () => {

   
    return (
        <div>{cbLabelObjArr.map((obj, i) => (
            <CheckBoxInput
                key={i}
                label={obj.label}
            />
        ))}</div>
    )
}