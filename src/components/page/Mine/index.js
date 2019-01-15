import React,{ Component } from 'react'
import './index.scss'

import {GroupUser}  from './../../../modules/group'

import Login from './Login'
import User from './User'

import { Route} from 'react-router-dom'

class Mine extends Component {
	constructor(props){
		super(props)
		
	}
	componentWillMount(){
		this.checkUserInfo()
	}
	//属性的变化用哪个生命周期钩子可以看到
	componentWillReceiveProps(props){
		//判断登录是否成功，登录那个按钮是否被点击了
		let {pathname} = props.location
		//判断登录按钮是否被点击
		if(pathname === this.props.location.pathname){
			this.checkUserInfo(props)
		}
		
	}
	checkUserInfo(props){
		let {userInfo} = (props||this.props)
		let {replace} = this.props.history
		if( userInfo){
			//编程式导航
			replace('/mine/user')
		}else{
			replace('/mine/login')
		}
	}
	render(){
		return (
			<div className = 'app-mine-box'>
				
				<Route path = '/mine/login' component = {Login}/>
				<Route path = '/mine/user' component = {User}/>
			</div>
		)
	}
}
export default GroupUser(Mine)