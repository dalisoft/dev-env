import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

const styles = {
	root: {
		flexGrow: 1,
	},
};

class Main extends Component {
	render() {
		const { classes, children } = this.props;
		return (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.root}>
					<Grid container justify="center">
						{children}
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default withRouter(withStyles(styles)(Main));
