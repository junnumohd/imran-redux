import * as type from './types'

export const addCourse = (courseName) => {
    return { type: type.ADD_COURSE, data: { name: courseName} } 
} 