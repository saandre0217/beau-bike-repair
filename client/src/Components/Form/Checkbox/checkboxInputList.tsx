import React from 'react';
import { CheckBoxInput } from './checkboxInput';
import { checkBoxLabels as cbLabelObjArr }  from '../formQuestionData';

interface checkBoxProps {
    handleCheckBoxChange:(key: string) => void
}
export const CheckBoxForm = ({ handleCheckBoxChange = (key: string) => {} }: checkBoxProps) => {
    return (
        <div>{cbLabelObjArr.map((obj, i) => (
            <CheckBoxInput
                key={i}
                label={obj.label}
                dbName={obj.dbName}
                handleCheckBoxChange={handleCheckBoxChange}
            />
        ))}</div>
    )
}