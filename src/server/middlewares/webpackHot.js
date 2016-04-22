import webpackHotMiddleware from 'webpack-hot-middleware';
import { webpackCompiler } from './webpackDev';

export default webpackHotMiddleware(webpackCompiler);
