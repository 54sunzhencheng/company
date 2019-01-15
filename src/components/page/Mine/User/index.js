import React,{ Component } from 'react'
import './index.scss'
import {GroupUser} from '../../../../modules/group'
class User extends Component {
	constructor(props){
		super(props)
		this.exit = this.exit.bind(this)
	}
	exit(){
		let {exitUser} = this.props
		exitUser()
	}
	render(){
		let {userInfo} = this.props
		return (			
			<div>
				<h4>{ !userInfo || userInfo.username}</h4>
				<span>注销</span>
			</div>
		)
	}
}
export default GroupUser(User)