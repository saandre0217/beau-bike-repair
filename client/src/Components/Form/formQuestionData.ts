export const checkBoxLabels = [
    {
        dbName: 'tuneUp',
        label: 'Tune Up'
    },
    {
        dbName: 'frontBreak',
        label: 'Front Brake Adjustment'
    }, 
    {
        dbName: 'rearBreak',
        label: 'Rear Brake Adjustment'
    },
    {
        dbName: 'frontShift',
        label: 'Front Shift Adjustment'
    },
    {
        dbName: 'rearShift',
        label: 'Rear Shift Adjustment'
    } ,
    {
        dbName: 'chain',
        label: 'Chain Replacement'
    } ,
    {
        dbName: 'bartape',
        label: 'Bar Tape Change'
    },
    {
        dbName: 'headset',
        label: 'Head Set Service'
    },
    {
        dbName: 'bottomBracket',
        label: 'Bottom Bracket Service'
    },
    {
        dbName: 'wheelBarring',
        label: 'Wheel Bearing Service'
    } ,
    {
        dbName: 'flat',
        label: 'Flat Fix'
    },
    {
        dbName: 'replaceTire',
        label: 'Tire Replacement'
    }, 
    {
        dbName: 'tubeless',
        label: 'Tubeless Tire Set Up'
    }
]

export const textLabels = [
    {
        dbName: 'firstName',
        label:'First Name'
    }, 
    {
        dbName: 'lastName',
        label:'Last Name'
    }, 
    {
        dbName: 'phone',
        label:'Phone Number'
    }, 
    {
        dbName: 'email',
        label:'Email Address'
    }, 
    {
        dbName: 'make',
        label:'Bike Make'
    }, 
    {
        dbName: 'model',
        label:'Bike Model'
    }, 
    {
        dbName: 'bikeYear',
        label:'Bike Year'
    }, 
    
]
export const allQuestions = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    make: '',
    model: '',
    bikeYear: '',
    tuneUp: false,
    frontBreak: false,
    rearBreak: false,
    frontShift: false,
    rearShift: false,
    chain: false,
    bartape: false,
    headset: false,
    bottomBracket: false,
    wheelBarring: false,
    flat: false,
    replaceTire: false,
    tubeless: false,
    other: '',
    comments: '',
}

export type allQuestionsInstance = {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    make: string,
    model: string,
    bikeYear: string,
    tuneUp: boolean,
    frontBreak: boolean,
    rearBreak: boolean,
    frontShift: boolean,
    rearShift: boolean,
    chain: boolean,
    bartape: boolean,
    headset: boolean,
    bottomBracket: boolean,
    wheelBarring: boolean,
    flat: boolean,
    replaceTire: boolean,
    tubeless: boolean,
    other: string,
    comments: string
}

