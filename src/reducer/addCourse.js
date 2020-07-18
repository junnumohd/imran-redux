import * as types from '../action/types';

const addCourseReducer = (state = []  , action) => {
    console.log(action.data, state)
	switch(action.type){
		case types.ADD_COURSE :
			return [...state, action.data]
		default :
			return state;
	}
}

export default addCourseReducer;