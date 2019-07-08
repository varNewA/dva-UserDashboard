import React, { Component } from 'react';
import styles from './MainLayout.css';
import Header from './Header';

class MainLayout extends Component{
	render(){
		const { children, location } = this.props;
		return(
			<div className = {styles.normal}>
				<Header/>
				<div className = {styles.connect}>
					<div className = {styles.main}>
						{children}
					</div>
				</div>
			</div>
		);
	}
}

export default MainLayout;