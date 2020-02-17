[![Cheery Logo](https://res.cloudinary.com/deep-impact-ag/image/upload/v1559170058/cherry/cherry.svg)](https://cherry.design/)

# Introduction
Cherry is a live inventory of definitions for the UI components, design patterns, naming conventions, brand assets and code guidelines.

This is the official repository for the Cherry Grid - NPM Library.

## Installation
```
npm install cherry-grid
```

## The Grid
Below you will find a typical example of the grid usage:

```
import React from 'react';
import { Container, Row, Col } from 'cherry-grid';
import styles from './App.css';

function App() {
	return (
		<Container>
			<Row>
				<Col className={styles.border} xs={4}>1</Col>
				<Col className={styles.border} xs={4}>2</Col>
				<Col className={styles.border} xs={4}>3</Col>
			</Row>
		</Container>
	);
}

export default App;
```

# Grid Components
### Container
The `<Container>` component is meant to be always the top level parent. They have a few properties available:

- `className` - **string** - You can pass a className.

	Default: not set. 

- `fluid` - **boolean** - Defines wheather the container should go full width, thus fluid.

	Default: false.

- `children` - **any** - Container children elements.

	Default: not set.

### Row
The `<Row>` component is a direct or non direct child of the <Container> component. Is comes with a few properties:

- `className` - **string** - You can pass a className. 

	Default: not set.

- `children` - **any** - Container children elements.

	Default: not set.

- `alignItems` - **string** - Use the align-items property to align the items vertically.

	Default: not set.

- `justifyContent` - **string** - Use the justify-content property to align the items horizontally. 

	Default: not set.

### Col
Col stands for column. The `<Col>` component should always be a direct child of the <Row>. Available properties:

- `id` - **string** - Columns can have html ID's. 

	Default: not set.

- `className` - **string** - You can pass a className. 

	Default: not set.

- `children` - **any** - Container children elements. 

	Default: not set.

- `textAlign` - **string** - Text align property. 

	Default: not set.

- `children` - **any** - Container children elements. 

	Default: not set.

- `xs` - **number** - Define which grid layout should be rendered on xs media query. 

	Default: not set.

- `sm` - **number** - Define which grid layout should be rendered on sm media query. 

	Default: not set.

- `md` - **number** - Define which grid layout should be rendered on md media query. 

	Default: not set.

- `lg` - **number** - Define which grid layout should be rendered on lg media query. 

	Default: not set.

- `xl` - **number** - Define which grid layout should be rendered on xl media query. 

	Default: not set.

- `xxl` - **number** - Define which grid layout should be rendered on xxl media query. 

	Default: not set.

- `xxxl` - **number** - Define which grid layout should be rendered on xxxl media query. 

	Default: not set.

- `first` - **boolean** - Define if the element should go first. 

	Default: false.

- `firstSm` - **boolean** - Define if the element should go first on sm media query. 

	Default: false.

- `firstMd` - **boolean** - Define if the element should go first on md media query. 

	Default: false.

- `firstLg` - **boolean** - Define if the element should go first on lg media query. 

	Default: false.

- `firstXl` - **boolean** - Define if the element should go first on xl media query. 

	Default: false.

- `firstXxl` - **boolean** - Define if the element should go first on xxl media query. 

	Default: false.

- `firstXxxl` - **boolean** - Define if the element should go first on xxxl media query. 

	Default: false.

- `last` - **boolean** - Define if the element should go last. 

	Default: false. 

- `lastSm`, - **boolean** - Define if the element should go last on sm media query. 

	Default: false.

- `lastMd` - **boolean** - Define if the element should go last on md media query. 

	Default: false.

- `lastLg` - **boolean** - Define if the element should go last on lg media query. 

	Default: false.

- `lastXl` - **boolean** - Define if the element should go last on xl media query. 

	Default: false.

- `lastXxl` - **boolean** - Define if the element should go last on xxl media query. 

	Default: false.

- `lastXxxl` - **boolean** - Define if the element should go last on xxxl media query. 

	Default: false.

# Add Cherry variables
If you don't have the Cherry variables in the project yet, please add the minimum required for the Grid to work.
Import the [mixins.css](https://raw.githubusercontent.com/DEEP-IMPACT-AG/cherry/master/src/assets/css/mixins.css) and declare basic variables:
```css
@import './mixins.css';

@custom-media --screen-xs (min-width: 0);
@custom-media --screen-sm (min-width: 576px);
@custom-media --screen-md (min-width: 768px);
@custom-media --screen-lg (min-width: 992px);
@custom-media --screen-xl (min-width: 1200px);
@custom-media --screen-xxl (min-width: 1440px);
@custom-media --screen-xxxl (min-width: 1920px);

:root {
	--max-width: 1440px;

	--margin-container-mobile: 20px;
	--margin-container-desktop: 80px;
	--margin-container-child-mobile: 10px;
	--margin-container-child-desktop: 10px;

	--margin-row-mobile: -20px;
	--margin-row-desktop: -20px;
	--gutter-col-mobile: 20px;
	--gutter-col-desktop: 20px;
}
```

# Single purpose CSS classes
[🔗Documentation](https://cherry.design/css-grid)
```css
@import 'cherry-grid/dist/css/styles.css';
```