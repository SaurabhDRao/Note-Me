import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NoteContextProvider from "../contexts/NoteContext";

import MyDrawer from '../MyDrawer';
import Landing from "../Landing";

export default function NoteMe() {
	return (
		<div className = "app-container">
			<NoteContextProvider>
				<Router>
					<Route exact path="/" component = { Landing } />
				</Router>
				<Router>
					<Route exact path="/noteme" component = { MyDrawer } />
				</Router>
				{/* <MyDrawer
					bounds={'.app-container'}
				/> */}
			</NoteContextProvider>
		</div>
	);
}