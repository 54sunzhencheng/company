import React, { Component } from 'react';

import { Home,List,ShopCar,Mine,Register} from './components/page'
import AppHeader from './components/common/AppHeader/index'
import AppFooter from './components/common/AppFooter/index'

import {GroupUser} from './modules/group'
//Vue里面是有个路由表的，但是react这边没有路由的全局配置，所以没有路由表，但是react-router-dom提供了一个路由工具Route

import { Route,Switch,withRouter} from 'react-router-dom'
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hasHeader: true,
			hasFooter: true
		}
	}
	componentWillMount(){
		let {getUserName} = this.props
		let username = localStorage.getItem('username')?localStorage.getItem('username'):''
		getUserName(username)
	}
	//exact的意思是完全匹配
	//Switch的意思是一次只渲染一个
	renderRoutes(){
		let { routes } = this.props
		return routes.map( item => <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}/>)
	}
  render() {
		let {hasHeader,hasFooter} = this.state
    return (
      <div className="App">
				{!hasHeader||<AppHeader/>}
        <Switch>
					{ this.renderRoutes() }
				</Switch>
				{!hasFooter||<AppFooter/>}
      </div>
    );
	}
	componentWillMount(){
		// let {pathname} = this.props.location
		// let arr = ['/mine','/list'] //判断有一个数组中有没有某个字符
		// if(arr.indexOf(pathname) > -1){
		// 	this.setState({
		// 		hasHeader: false,
		// 		hasFooter: false
		// 	})
		// }else{
		// 	this.setState({
		// 		hasHeader: true,
		// 		hasFooter: true
		// 	})
		// }

		let {pathname} = this.props.location
		let arr = ['/mine/login','/mine/user','/register','/list'] //判断有一个数组中有没有某个字符
		if(arr.indexOf(pathname) > -1){
			this.setState({
				hasHeader: false,
				hasFooter: false
			})
		}else{
			this.setState({
				hasHeader: true,
				hasFooter: true
			})
		}
	}
	componentWillReceiveProps(props){
		//我们可以监听到路由的变化了
		// console.log(props);//props.location.pathname	当前的
		// console.log(this.props.location.pathname)
		
		
		let {pathname} = props.location
		let arr = ['/mine/login','/mine/user','/register','/list'] //判断有一个数组中有没有某个字符
		if(arr.indexOf(pathname) > -1){
			this.setState({
				hasHeader: false,
				hasFooter: false
			})
		}else{
			this.setState({
				hasHeader: true,
				hasFooter: true
			})
		}
	}
}

//es6  react 组件默认属性如何定义
App.defaultProps = {
	routes: [
		{
			id: 1,
			path: '/',
			component: Home,
			exact: true
		},
		{
			id: 2,
			path: '/list',
			component: List
		},
		{
			id: 3,
			path: '/shopcar',
			component: ShopCar
		},
		{
			id: 4,
			path: '/mine',
			component: Mine,
		},
		{
			id: 5,
			path: '/register',
			component: Register,
		}
	]
}
export default withRouter(GroupUser(App));
