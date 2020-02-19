import React from "react";
import classNames from "classnames";
import styles from "./Container.css";

export class Container extends React.Component {
	render() {
		const {
			id,
			className,
			children,
			fluid = false,
			child = false,
		} = this.props;
		return (
			<div
				id={id}
				className={classNames(
					styles.container,
					{
						[styles[`container-fluid`]]: fluid,
						[styles[`container-child`]]: child,
					},
					className,
				)}
				data-container
				data-fuild={fluid}
				data-child={child}
			>
				{children}
			</div>
		);
	}
}

export default Container;
