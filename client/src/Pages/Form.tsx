import React, { useReducer } from 'react';
//import { CustomerInput } from '../Components/customerInput';
import { CheckBoxForm } from '../Components/Form/Checkbox/checkboxInputList';
import { TextForm } from '../Components/Form/Text/textInputList'
import { allQuestions } from '../Components/Form/formQuestionData';
import { TextInput } from '../Components/Form/Text/textInput';
import { LargeTextInput } from '../Components/Form/Text/largeTextInput';
import axios from 'axios';
const serverPath = process.env.REACT_APP_SERVER_PATH
axios.defaults.baseURL = serverPath;

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
export const Intake = () => {
const [state, dispatch] = useReducer(reducer, allQuestions)

const handleAddedText = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, key:string) => {
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

const handleSubmit = async() => {
    try{
        console.log(state, 'submitted', 'server', serverPath)
        const customer = await axios.post(`/api/customer/create`, { state })
        console.log('success', customer, 'path:', serverPath)
    }catch(error){
    
        console.error('could not submit form', error)
    }
}


    return (
        <div>
            <TextForm 
            state={state}
            handleAddedText={handleAddedText}
            />
            <CheckBoxForm
            handleCheckBoxChange={handleCheckBoxChange}
            />
            <TextInput 
                label='other'
                handleAddedText={handleAddedText}
                dbName='other'
                state={state}
                key={2}
            />
            <LargeTextInput 
                label='Additional Comments'
                handleAddedText={handleAddedText}
                dbName='comments'
                state={state}
                key={1}
            />
            <button
                onClick={() => handleSubmit()}
            >
                submit
            </button>
        </div>
    )
}