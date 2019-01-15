import React,{ Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import './index.scss'

class Register extends Component {
	constructor(props){
		super(props)
	}
	render(){
		let {go} = this.props.history
		return (
			<div className = 'app-register-box'>
				<NavBar
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => { go(-1)}}
				>注册</NavBar>
				<div className = 'form'>
					<div className = 'group'>
						<p><i className = 'fa fa-user'></i><input type='text' placeholder='请输入11位手机号'/></p>
					</div>
					<div className = 'group'>
						<p><i className = 'fa fa-lock'></i><input type='text' placeholder='请输入短信验证码'/></p>
					</div>
					<div className = 'group'>
						<p><i className = 'fa fa-lock'></i><input type='text' placeholder='密码'/></p>
					</div>
					<div className = 'group'>
						<p><i className = 'fa fa-lock'></i><input type='text' placeholder='确认密码'/></p>
					</div>
					<div className = 'forget'>
					<i className = 'fa fa-check-circle'></i>同意
					<a>《同意协议并注册》</a>
				</div>
					<button className = 'button-login'>注册</button>
				</div>
			</div>
		)
	}
}
export default Register