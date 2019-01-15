import actionCreator from '../../store/MineData/actionCreator'
import { connect} from 'react-redux'
import { bindActionCreators} from 'redux'

const GroupUser = connect(state => state.user,
	dispatch => bindActionCreators(actionCreator,dispatch)
)

export default GroupUser