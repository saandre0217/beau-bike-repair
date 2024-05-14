import React, { SetStateAction, useState } from 'react';
import axios from 'axios';
import { allQuestionsInstance } from '../questionData';

//trying to make customer input component more reuseable
export type TextInputObjModel = {
    key: number,
    label: string,
    handleAddedText: (e:React.ChangeEvent<HTMLInputElement>, key: string) => void,
    dbName: string,
    state: allQuestionsInstance
}
export const TextInput = ({ label, handleAddedText, dbName, state}: TextInputObjModel) => {
    return (
        <div >
            <div>{label}</div>
            <input 
                id={dbName}
                type='text'
                //@ts-ignore
                value={state[dbName]}
                onChange={(e) => handleAddedText(e, dbName)}
                />
           
        </div>
    )
}