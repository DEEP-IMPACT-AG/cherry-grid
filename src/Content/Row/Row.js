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
			gapsXs = "default",
			gapsSm,
			gapsMd,
			gapsLg,
			gapsXl,
			gapsXxl,
			gapsXxxl,
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

						[styles[`xs-gaps-${gapsXs}`]]: gapsXs,
						[styles[`sm-gaps-${gapsSm}`]]: gapsSm,
						[styles[`md-gaps-${gapsMd}`]]: gapsMd,
						[styles[`lg-gaps-${gapsLg}`]]: gapsLg,
						[styles[`xl-gaps-${gapsXl}`]]: gapsXl,
						[styles[`xxl-gaps-${gapsXxl}`]]: gapsXxl,
						[styles[`xxxl-gaps-${gapsXxxl}`]]: gapsXxxl,
					},
					className,
				)}
				data-row
				xs-gaps={gapsXs}
				sm-gaps={gapsSm}
				md-gaps={gapsMd}
				lg-gaps={gapsLg}
				xl-gaps={gapsXl}
				xxl-gaps={gapsXxl}
				xxxl-gaps={gapsXxxl}
			>
				{children}
			</div>
		);
	}
}

export default Row;
