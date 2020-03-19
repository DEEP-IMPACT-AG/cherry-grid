import React, { Component } from "react";
import classNames from "classnames";
import styles from "./Row.css";

export class Row extends Component {
	render() {
		const {
			id,
			className,
			children,
			alignItems,
			justifyContent,
		} = this.props;
		return (
			<div
				id={id}
				className={classNames(
					styles.row,
					{
						[styles[`align-items-${alignItems}`]]: alignItems,
						[styles[
							`justify-content-${justifyContent}`
						]]: justifyContent,
					},
					className,
				)}
				data-row
			>
				{children}
			</div>
		);
	}
}

export default Row;
