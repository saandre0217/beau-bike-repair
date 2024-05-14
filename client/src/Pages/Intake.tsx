import React, { useReducer } from 'react';
//import { CustomerInput } from '../Components/customerInput';
import { CheckBoxForm } from '../Components/Checkbox/checkboxForm';
import { TextForm } from '../Components/Text/textForm'
import { allQuestions } from '../Components/questionData';
export const Intake = () => {
const reducer = (state:any, action:any) => {
    switch(action.type) {
        case 'add_text': {
            return {
                ...state, 
                [action.key]: action.newValue
            }
        }
        case 'change_boolean': {
            return {
                ...state,
                [action.key]: !state[action.key]
            }
        }
    }
}

const [state, dispatch] = useReducer(reducer, allQuestions)

const handleAddedText = (e:React.ChangeEvent<HTMLInputElement>, key:string) => {
    dispatch({
        type:'add_text',
        key: key,
        newValue: e.target.value
    })
}

const handleCheckBoxChange = (key:string) => {
    dispatch({
        type:'change_boolean',
        key: key
    })
}
console.log(state)

    return (
        <div>
            <TextForm 
            state={state}
            handleAddedText={handleAddedText}
            />
            <CheckBoxForm
            handleCheckBoxChange={handleCheckBoxChange}
            />
        </div>
    )
}