import * as React from "react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	fluid?: boolean;
	child?: boolean;
}

export interface RowProps extends Omit<React.HTMLProps<HTMLElement>, "form"> {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	alignItems?:
		| "stretch"
		| "center"
		| "flex-start"
		| "flex-end"
		| "baseline"
		| "initial";
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "initial";
}

export interface ColProps extends Omit<React.HTMLProps<HTMLElement>, "form"> {
	id?: string;
	className?: string;
	children?: React.ReactNode;
	textAlign?: "right" | "left" | "center";
	xs?: number | "auto";
	sm?: number | "auto";
	md?: number | "auto";
	lg?: number | "auto";
	xl?: number | "auto";
	xxl?: number | "auto";
	xxxl?: number | "auto";
	first?: boolean;
	firstXs?: boolean;
	firstSm?: boolean;
	firstMd?: boolean;
	firstLg?: boolean;
	firstXl?: boolean;
	firstXxl?: boolean;
	firstXxxl?: boolean;
	last?: boolean;
	lastXs?: boolean;
	lastSm?: boolean;
	lastMd?: boolean;
	lastLg?: boolean;
	lastXl?: boolean;
	lastXxl?: boolean;
	lastXxxl?: boolean;
}

declare class Container<T = ContainerProps> extends React.Component<
	ContainerProps
> {}

declare class Row<T = { [key: string]: any }> extends React.Component<
	RowProps
> {}

declare class Col<T = { [key: string]: any }> extends React.Component<
	ColProps
> {}

export { Container, Col, Row };
