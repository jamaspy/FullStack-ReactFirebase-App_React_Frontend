import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import "./App.css";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

//Components
import Navbar from "./components/Navbar";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#9effe3",
			main: "#6adaba",
			dark: "#00d195",
			contrastText: "#fff"
		},
		secondary: {
			light: "#5274ff",
			main: "#1437c1",
			dark: "#2146de",
			contrastText: "#fff"
		}
	},
	typography: {
		useNextVariants: true
	},
	forms: {
		form: {
			textAlign: "center"
		},
		image: {
			maxWidth: 150,
			margin: "20px auto"
		},
		button: {
			margin: "20px auto",
			position: "relative",
		},
		progress:{
			position: "absolute"
		},
		textField: {
			margin: "10px auto"
		},
		customError: {
			color: 'red',
			fontSize: "0.8rem"
		}
	}
});

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className='App'>
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
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
