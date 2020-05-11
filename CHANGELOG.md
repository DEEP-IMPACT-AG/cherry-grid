
**v.0.1.27**
- Consistent naming for data attributes `justify-content` and `align-items`.

**v.0.1.26**
- Add data attributes for `justifyContent` and `alignItems`.

**v.0.1.25**
- Fix vanilla CSS gaps.

**v.0.1.24**
- Fix NPM version.

**v.0.1.23**
- Add support for custom gap sizes.
- New `Row` component properties:
	- `gapsXs` - *string* - Column gaps on **xs** media query.
	- `gapsSm` - *string* - Column gaps on **sm** media query.
	- `gapsMd` - *string* - Column gaps on **md** media query.
	- `gapsLg` - *string* - Column gaps on **lg** media query.
	- `gapsXl` - *string* - Column gaps on **xl** media query.
	- `gapsXxl` - *string* - Column gaps on **xxl** media query.
	- `gapsXxxl` - *string* - Column gaps on **xxxl** media query.
	- Props: `default`, `none`, `medium`, `big`
- New Cherry variables for supporting custom sizes:
	- `--margin-row-none: 0;`
	- `--margin-row-default: -10px;`
	- `--margin-row-medium: -30px;`
	- `--margin-row-big: -50px;`
	- `--gutter-col-none: 0;`
	- `--gutter-col-default: 10px;`
	- `--gutter-col-medium: 30px;`
	- `--gutter-col-big: 50px;`
- Deprecated Cherry variables: 
	- `--margin-row-mobile: -10px;`
	- `--margin-row-desktop: -10px;`
	- `--gutter-col-mobile: 10px;`
	- `--gutter-col-desktop: 10px;`

**v.0.1.22**
- First usable version.
