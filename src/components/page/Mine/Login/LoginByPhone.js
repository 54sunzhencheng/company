import React,{ Component } from 'react'
import { Toast } from 'antd-mobile';
class LoginByPhone extends Component {
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)
	}
	submit(e){
		e.preventDefault()
		let {login} = this.props
		login({
			phonenumber: this.phonenumber.value,
			codenumber: this.codenumber.value,
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
			<div className = 'login-phone-box'>
				<form onSubmit = { this.submit}>
					<div className = 'group'>
						<p><i className = 'fa fa-user'></i><input ref = {el => this.phonenumber = el} type='text' placeholder='手机号' className= 'phonenumber'/></p>
					</div>
					<div className = 'group'>
						<p><i className = 'fa fa-lock'></i><input ref = {el => this.codenumber = el} type='text' placeholder='验证码' className= 'codenumber'/></p>
					</div>
					<div className = 'forget'>
						<a>忘记密码</a>
						<a href = '/mine/register'>注册</a>
					</div>
					<button className = 'button-login'>登录</button>
				</form>
			</div>
		)
	}
}
export default LoginByPhone