import React, { Component } from "react";
import classNames from "classnames";
import styles from "./Col.css";

export class Col extends Component {
	render() {
		const {
			id,
			className,
			children,
			textAlign,
			xs,
			sm,
			md,
			lg,
			xl,
			xxl,
			xxxl,
			first,
			firstSm,
			firstMd,
			firstLg,
			firstXl,
			firstXxl,
			firstXxxl,
			last,
			lastSm,
			lastMd,
			lastLg,
			lastXl,
			lastXxl,
			lastXxxl,
		} = this.props;
		return (
			<div
				id={id}
				className={classNames(
					styles.col,
					{
						[styles[`text-align-${textAlign || ""}`]]: textAlign,
						[styles[`col-${xs || ""}`]]: xs,
						[styles[`col-sm-${sm || ""}`]]: sm,
						[styles[`col-md-${md || ""}`]]: md,
						[styles[`col-lg-${lg || ""}`]]: lg,
						[styles[`col-xl-${xl || ""}`]]: xl,
						[styles[`col-xxl-${xxl || ""}`]]: xxl,
						[styles[`col-xxxl${xxxl || ""}`]]: xxxl,
						[styles[`order-first`]]: first,
						[styles[`order-sm-first`]]: firstSm,
						[styles[`order-md-first`]]: firstMd,
						[styles[`order-lg-first`]]: firstLg,
						[styles[`order-xl-first`]]: firstXl,
						[styles[`order-xxl-first`]]: firstXxl,
						[styles[`order-xxxl-first`]]: firstXxxl,
						[styles[`order-last`]]: last,
						[styles[`order-sm-last`]]: lastSm,
						[styles[`order-md-last`]]: lastMd,
						[styles[`order-lg-last`]]: lastLg,
						[styles[`order-xl-last`]]: lastXl,
						[styles[`order-xxl-last`]]: lastXxl,
						[styles[`order-xxxl-last`]]: lastXxxl,
					},
					className,
				)}
				data-col
			>
				{children}
			</div>
		);
	}
}

export default Col;
