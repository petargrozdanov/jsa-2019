var express = require(`express`);
var students = require(`./handlers/students`);

var app = express();

app.get(`/`, students.GetStudents);

app.listen(8080, (err) => {
    if(err){
        return console.error(`Could not start server`);
    }
    return console.log(`Server sucessfully started`);
});