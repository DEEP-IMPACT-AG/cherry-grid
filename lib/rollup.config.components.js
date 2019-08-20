import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";


export default {
	input: __dirname + '/../src/index.js',

	output: [
		{
			file: __dirname + '/../dist/cherry.js',
			format: 'umd',
			name: 'CherryGrid',
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
		{
			file: __dirname + '/../dist/cherry.module.js',
			format: 'es',
			name: 'CherryGrid',
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
			},
		},
	],

	plugins: [
		postcss({
			minimize: true,
			modules: true,
			plugins: [
				require('cssnano')({
					preset: 'default',
				}),
			],
		}),
		babel({
			runtimeHelpers: true,
			exclude: __dirname + '/../node_modules/**',
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		resolve(),
		commonjs(),
		terser(),
	],

	external: ['react', 'react-dom'],
};
