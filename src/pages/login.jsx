import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/manLogin.svg";
import axios from "axios";
import { Link } from 'react-router-dom';
//MUI Stuff

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = {
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
};

class login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			loading: false,
			errors: {}
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			loading: true
		});
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		axios
			.post("/login", userData)
			.then(res => {
                console.log(res.data);
                localStorage.setItem(`FBIdToken`,`Bearer ${res.data.token}`);
				this.setState({
					loading: false
				});
				this.props.history.push("/");
			})
			.catch(err => {
				this.setState({
					errors: err.response.data,
					loading: false
				});
			});
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<Grid container className={classes.form}>
				<Grid item sm />
				<Grid item sm>
					<img src={AppIcon} alt='App Logo' className={classes.image} />
					{/* <Typography variant='h3' className={classes.pageTitle}>
						LogIn
					</Typography> */}
					<form noValidate onSubmit={this.handleSubmit}>
						<TextField
							id='email'
							name='email'
							type='email'
							label='Email'
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
							value={this.state.email}
							onChange={this.handleChange}
							fullWidth
						/>
						<TextField
							id='password'
							name='password'
							type='password'
							label='Password'
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
							value={this.state.password}
							onChange={this.handleChange}
							fullWidth
						/>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
						<Button
							type='submit'
							color='primary'
							variant='contained'
							onClick={this.handleSubmit}
                            className={classes.button}
                            disabled={loading}
						>
							Login
                            {loading && (
                                <CircularProgress size={20} color="primary" className={classes.progress}/>
                            )}
						</Button>
                        <br/>
                        <small>Need An Account? Sign Up <Link to="/signup">Here</Link></small>
					</form>
				</Grid>
				<Grid item sm />
			</Grid>
		);
	}
}
login.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(login);
