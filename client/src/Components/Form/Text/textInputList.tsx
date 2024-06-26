import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { TextInput } from './textInput';
import { textLabels as labelQuestionObjArr }  from '../formQuestionData';
import { allQuestionsInstance } from '../formQuestionData';
interface textProps {
    handleAddedText:(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, key: string) => void,
    state: allQuestionsInstance
}
export const TextForm = ({ handleAddedText = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, key: string) => {}, state }: textProps) => {
   
    return (
        <div>
            <div>{labelQuestionObjArr.map((obj, i) => (
                <TextInput
                key={i}
                label={obj.label}
                dbName={obj.dbName}
                handleAddedText={handleAddedText}
                state={state}
            
                />
                ))}
            </div>
        </div>
    )
}