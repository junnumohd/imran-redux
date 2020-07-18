import { combineReducers }	from 'redux';
import addCourseReducer from './addCourse'


const rootReducer = combineReducers({
    courses: addCourseReducer
});

export default rootReducer;