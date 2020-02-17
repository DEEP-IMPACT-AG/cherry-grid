import * as React from "react";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ContainerProps extends React.HTMLAttributes {
	children: any;
	className?: string;
	fluid?: boolean;
	child?: boolean;
}

export interface RowProps extends Omit<React.HTMLProps<HTMLElement>, "form"> {
	children: any;
	className?: string;
	alignItems?: string;
	justifyContent?: string;
}

export interface ColProps extends Omit<React.HTMLProps<HTMLElement>, "form"> {
	textAlign?: string;
	className?: string;
	id?: string;
	children?: any;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
	xxl?: number;
	xxxl?: number;
	first?: boolean;
	firstSm?: boolean;
	firstMd?: boolean;
	firstLg?: boolean;
	firstXl?: boolean;
	firstXxl?: boolean;
	firstXxxl?: boolean;
	last?: boolean;
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
