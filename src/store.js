import { createContext } from 'react'
export const addAtt = [
    {
        title: "Add a new vacation",
        buttons: <button type='submit' className="add-button"></button>,
    },
];

export const editAtt = [
    {
        title: "Edit a vacation",
        buttons: (
            <>
                <button type='reset' className="discard-button"></button>
                <button type='submit' className="save-button"></button>
            </>
        ),
    },
];


export const Context = createContext()