import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI Imports
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
class Navbar extends Component {
	render() {
		return (
			<div>
				<AppBar>
					<ToolBar className="nav-container">
						<Button color='inherit' component={Link} to='/login'>
							Login
						</Button>
						<Button color='inherit' component={Link} to='/'>
							Home
						</Button>
						<Button color='inherit' component={Link} to='/signup'>
							Signup
						</Button>
					</ToolBar>
				</AppBar>
				signup
			</div>
		);
	}
}

export default Navbar;
