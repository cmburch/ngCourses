//don't need decorator for services
export class CoursesService{
    
    courses = ['course1','course2','course3']
    
    getCourse(){
        return this.courses;
    }
}