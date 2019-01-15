import React,{ Component } from 'react'
import './index.scss'
import {Link,NavLink} from 'react-router-dom'
class AppFooter extends Component {
	
	renderAppFooterNavs(){
		let {appFooterNavs} = this.props
		return (
			<ul>
				{ appFooterNavs.map( item => {
					return (
					<li key = {item.id}>
						<NavLink 
							activeClassName = 'active'
							to = {{
								pathname: item.path,
								// search: 'a=1&b=2',
								// hash: '#ssss'
							}}
							exact = {item.exact}
						>
							<i className = {'fa fa-' + item.icon}></i>
							<span>{ item.title}</span>
						</NavLink>
					</li>
					)
				})}
			</ul>
		)
	}
	render(){
		return (
			<div className = 'app-footer-box'>
				{ this.renderAppFooterNavs()}
			</div>
		)
	}
}

AppFooter.defaultProps = {
	appFooterNavs: [
		{
			id: 1,
			title: '首页',
			icon: 'home',
			path: '/',
			exact: true
		},
		{
			id: 2,
			title: '分类',
			icon: 'th-large',
			path: '/list'
		},
		{
			id: 3,
			title: '专享福利',
			icon: 'gift',
			path: '/aaa'
		},
		{
			id: 4,
			title: '购物车',
			icon: 'shopping-cart',
			path: '/shopcar'
		},
		{
			id: 5,
			title: '我的',
			icon: 'user',
			path: '/mine'
		}
		
	]
}
export default AppFooter