import React,{ Component } from 'react'
import './index.scss'
import { NavBar, Icon } from 'antd-mobile'
import LoginByUser from './LoginByUser'
import LoginByPhone from './LoginByPhone'

import {GroupUser} from '../../../../modules/group'
class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			type: 'user'
		}
	}

	renderLogin(){
		let {type} = this.state
		let {loginUser,loginPhone} = this.props
		let loginType = 'phone'
		let Form = LoginByUser
		let login = loginUser
		if(type !== 'user'){
			loginType = 'user'
			Form = LoginByPhone
			login = loginPhone
		}
		let handlerClick = () => {
			this.setState({
				type: loginType
			})
		}
		return (
			<div>
				<Form login = {login}/>
				<div className = 'login-content' onClick = {handlerClick}>
					<a>{type === 'user'?'手机快捷':' 账号'}登录</a>
				</div>
			</div>
		)
	}
	render(){
		let {go} = this.props.history
		let {type} = this.state
		return (
			<div className = 'app-login-box'>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => { go(-1)}}
				>{type === 'user'?'账号':' 手机快捷'}登录</NavBar>
				
				{this.renderLogin()}
			</div>
		)
	}
}
export default GroupUser(Login)