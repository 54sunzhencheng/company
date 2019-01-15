import React,{ Component } from 'react'
import './index.scss'
import { SearchBar} from 'antd-mobile';
class AppHeader extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className = 'app-header-box'>
				<SearchBar placeholder="请输入商品名称" ref={ref => this.autoFocusInst = ref} />
			</div>
		)
	}
}
export default AppHeader