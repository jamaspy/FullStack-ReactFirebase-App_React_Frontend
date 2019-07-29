import React, { Component } from "react";
// import jwtDecode from 'jwt-decode';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// import AuthRoute from './util/AuthRoute'
import "./App.css";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

//Components
import Navbar from "./components/Navbar";

//Theme
const theme = createMuiTheme(themeFile);

// TODO - Page keeps reloading TIME: 5:57:21
//
// let authenticated;
// const token = localStorage.FBIdToken;
// if (token) {
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp * 1000 < Date.now()) {
//     authenticated = false;
//     window.location.href = '/login';
//   } else {
//     authenticated = true;
//   }
// }

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Provider store={store}>
					<Router>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={home} />
								<Route exact path='/login' component={login} />
								<Route exact path='/signup' component={signup} />
							</Switch>
						</div>
					</Router>
				</Provider>
			</MuiThemeProvider>
		);
	}
}

export default App;
