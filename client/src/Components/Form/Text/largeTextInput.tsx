import React from 'react';
import { TextInputObjModel } from './textInput';

export const LargeTextInput = ({ label, handleAddedText, dbName, state}: TextInputObjModel) => {
    return (
        <div >
            <div>{label}</div>
            <textarea 
                id={dbName}
                cols={40}
                rows={5}
                //@ts-ignore
                value={state[dbName]}
                onChange={(e) => handleAddedText(e, dbName)}
                />
           
        </div>
    )
}