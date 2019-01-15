import React from 'react';
import ReactDOM from 'react-dom';
//引入全局的公共样式
import './stylesheets/main.scss'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './modules/rem';
//使用react组件库  antd-mobile 引入样式
import 'antd-mobile/lib/date-picker/style/css';
//引入路由
import { BrowserRouter as Router} from 'react-router-dom'
//BrowserRouter需要做后台配置

//引入redux  Previder
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
	<Provider store = { store}>
		<Router>
			<App />
		</Router>
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
