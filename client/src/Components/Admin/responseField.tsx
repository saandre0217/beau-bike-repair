import React, { useState } from 'react';

interface ResponseItemProps {
    label: string
    customerResponse: string | boolean
}
export const ResponseField = (responseItem: ResponseItemProps) => {
    const { label, customerResponse } = responseItem

    return (
        <div>
            <div>{label}: {customerResponse}</div>
        </div>
    )
}