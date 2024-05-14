import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { TextInput } from './textInput';
import { textLabels as labelQuestionObjArr }  from '../questionData';


export const TextForm = (handleAddedText: any, state:any) => {
   
    return (
        <div>{labelQuestionObjArr.map((obj, i) => (
            <TextInput
                key={i}
                label={obj.label}
                dbName={obj.dbName}
                handleAddedText={handleAddedText}
                state={state}
            />
        ))}</div>
    )
}