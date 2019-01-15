//真正的统一管理分片的reducer
import { combineReducers } from 'redux'
import user from './MineData/reducer'

const reducer = combineReducers({
	user
})

export default reducer