var GetAllStudents = (req, res) => {
    res.send(`Hello from /students`);
};
var GetStudentById = (req, res) =>{
    res.send(`Get sinlge student with id: ${req.params.id}` +req.params.sub);
};
var GetStudentSubjectGrades = (req, res) => {
    res.send(`Students with id: ` +req.params.id+ ` grades for subject: ` +req.params.sub);
};
module.exports = {
    
    GetAllStudents,
    GetStudentById,
    GetStudentSubjectGrades
};