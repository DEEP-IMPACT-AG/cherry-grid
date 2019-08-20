import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Row.css';

export class Row extends Component {
	render () {
		const {
			className,
			children,
			alignItems,
			justifyContent,
		} = this.props;
		return (
			<div
				className={classNames(
					styles.row,
					{
						[styles[`alignItems-${alignItems}`]]: alignItems,
						[styles[`justifyContent-${justifyContent}`]]: justifyContent,
					},
					className
				)}
			>
				{children}
			</div>
		);
	}
}

export default Row;
