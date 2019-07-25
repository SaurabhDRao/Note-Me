import React from 'react';
import NoteContextProvider from "../contexts/NoteContext";
import MyDrawer from '../MyDrawer';

export default function NoteMe() {
	return (
		<div className = "app-container">
			<NoteContextProvider>
				<MyDrawer
					bounds={'.app-container'}
				/>
			</NoteContextProvider>
		</div>
	);
}