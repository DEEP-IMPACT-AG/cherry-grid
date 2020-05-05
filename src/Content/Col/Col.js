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
			firstXs,
			firstSm,
			firstMd,
			firstLg,
			firstXl,
			firstXxl,
			firstXxxl,
			last,
			lastXs,
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
					{
						[styles[`text-align-${textAlign || ""}`]]: textAlign,
						[styles[`col-xs-${xs || ""}`]]: xs,
						[styles[`col-sm-${sm || ""}`]]: sm,
						[styles[`col-md-${md || ""}`]]: md,
						[styles[`col-lg-${lg || ""}`]]: lg,
						[styles[`col-xl-${xl || ""}`]]: xl,
						[styles[`col-xxl-${xxl || ""}`]]: xxl,
						[styles[`col-xxxl${xxxl || ""}`]]: xxxl,
						[styles[`col-order-first`]]: first,
						[styles[`col-xs-order-first`]]: firstXs,
						[styles[`col-sm-order-first`]]: firstSm,
						[styles[`col-md-order-first`]]: firstMd,
						[styles[`col-lg-order-first`]]: firstLg,
						[styles[`col-xl-order-first`]]: firstXl,
						[styles[`col-xxl-order-first`]]: firstXxl,
						[styles[`col-xxxl-order-first`]]: firstXxxl,
						[styles[`col-order-last`]]: last,
						[styles[`col-xs-order-last`]]: lastXs,
						[styles[`col-sm-order-last`]]: lastSm,
						[styles[`col-md-order-last`]]: lastMd,
						[styles[`col-lg-order-last`]]: lastLg,
						[styles[`col-xl-order-last`]]: lastXl,
						[styles[`col-xxl-order-last`]]: lastXxl,
						[styles[`col-xxxl-order-last`]]: lastXxxl,
					},
					className,
				)}
				data-col
			>
				{children && children}
			</div>
		);
	}
}

export default Col;
