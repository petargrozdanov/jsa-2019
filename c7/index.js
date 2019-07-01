var express = require(`express`);
var students = require (`./handlers/students`);
var calculator = require(`./handlers/calculator`);

var api = express();

api.get(`/students`, students.GetAllStudents);
api.get(`/students/:id`, students.GetStudentById);
api.get(`/students/:id/grades/:sub`, students.GetStudentSubjectGrades);

api.get(`/calc/:op/:a/:b`, calculator.calculator);

api.listen(8080, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(`Server started successfully`);
});