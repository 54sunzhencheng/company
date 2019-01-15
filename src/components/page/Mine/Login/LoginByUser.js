import React,{ Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { Toast } from 'antd-mobile';
class LoginByUser extends Component {
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)
	}
	submit(e){
		e.preventDefault()
		let {login} = this.props
		login({
			username: this.username.value,
			password: this.password.value,
			success(){
				Toast.success('Load success !!!', 1);
			},
			fail(){
				Toast.fail('Load failed !!!', 1);
			}
		})
	}
	render(){
		return (
			<div className = 'login-user-box'>
				<form
					onSubmit = { this.submit}
				>
					<div className = 'group'>
						<p><i className = 'fa fa-user'></i><input ref = {el => this.username = el} type='text' placeholder='用户名' className = 'username'/></p>
					</div>
					<div className = 'group'>
						<p><i className = 'fa fa-lock'></i><input ref = {el => this.password = el} type='password' placeholder='密码' className = 'password'/></p>
					</div>
					<div className = 'forget'>
						<a>忘记密码</a>
						<NavLink 
						to = '/register'
						>注册</NavLink>
					</div>
					<button className = 'button-login'
					
					>登录</button>
				</form>
			</div>
		)
	}
}
export default LoginByUser