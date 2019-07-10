var model = require(`../models/students`);
var GetStudents = (req, res) => {
    model.GetAll()
    .then(data => {
        return res.send(data);
    })
    .catch(err => {
        return res.send(`Error`);
    });
};

module.exports = {
    GetStudents
}