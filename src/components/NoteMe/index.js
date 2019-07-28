import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LandingRoute from "../LandingRoute";

import NoteContextProvider from "../contexts/NoteContext";

import MyDrawer from '../MyDrawer';
import Landing from "../Landing";

export default function NoteMe({ authenticated }) {
	console.log(authenticated);
	return (
		<div className = "app-container">
			<NoteContextProvider>
				<Router>
					<LandingRoute authenticated = { authenticated } exact path="/" component = { Landing } />
					<PrivateRoute authenticated = { authenticated } exact path="/noteme" component = { MyDrawer } />
				</Router>
			</NoteContextProvider>
		</div>
	);
}