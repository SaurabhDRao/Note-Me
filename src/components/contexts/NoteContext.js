import React, { createContext } from 'react';

export const NoteContext = createContext();

export default function NoteContextProvider(props) {


    return (
        <NoteContext.Provider value = {{  }}>
            { props.children }
        </NoteContext.Provider>
    )
}
