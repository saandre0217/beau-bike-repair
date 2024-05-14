import React, { SetStateAction, useState } from 'react';
import axios from 'axios';

//trying to make customer input component more reuseable
export type TextInputObjModel = {
    key: number,
    label: string,
    handleAddedText: any,
    dbName: string,
    state: any
}
export const TextInput = (textProps: TextInputObjModel) => {
    return (
        <div >
            <div>{textProps.label}</div>
            <input 
                id={textProps.dbName}
                type='text'
                value={textProps.state[textProps.dbName]}
                onChange={(e) => textProps.handleAddedText.handleAddedText(e, textProps.dbName)}
                />
           
        </div>
    )
}