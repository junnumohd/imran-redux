import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addCourse as addCourseAction } from './action'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            course: ''
        }
        this.addCourse = this.addCourse.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    addCourse(){
        this.props.dispatch(addCourseAction(this.state.course));
    }
    handleChange(e){
        this.setState({course: e.target.value})
    }
    render(){
        return (
            <>
                <div>
                    <input value={this.state.course} onChange={this.handleChange}/> <button onClick={this.addCourse}>Add course</button>
                </div>
                <ul>
                    {
                        this.props.courses.map((course)=><li>{course.name}</li>)
                    } 
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(App);

