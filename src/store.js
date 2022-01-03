import { createContext } from 'react'
export const addAtt = [
    {
        title: "Add a new vacation",
        buttons: <button className="add-button"></button>,
    },
];

export const editAtt = [
    {
        title: "Edit a vacation",
        buttons: (
            <>
                <button className="discard-button"></button>
                <button className="save-button"></button>
            </>
        ),
    },
];

export const Context = createContext()