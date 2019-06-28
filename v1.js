var http = require('http');
var getAllStudents = () => {
    console.log("Got all students");
};
var getStudent = () => {   
    console.log("Got student with id number: ");
};
var storeStudent = () => {
    console.log("Posted student");
};
var updateStudent = () => {
    console.log("Updated student with id number: ");
};
var patchStudent = () => {    
    console.log("Patched student with id number: ");
};
var deleteStudent = () => {
    console.log("Deleted student with id number: ");
};
var routes = {
    get: [
        {route: '/students', func: getAllStudents},
        {route: '/students/:id', func: getStudent}
    ],
    post: [
        {route: '/students', func: storeStudent}
    ],
    puit: [
        {route: '/students/:id', func: updateStudent}
    ],
    patch: [
        {route: '/students/:id', func: patchStudent}
    ],
    delete: [
        {route: '/students/:id', func: deleteStudent}
    ]
};
var server = http.createServer(function (req, res) {
    var method = req.method;
    var URL = req.url;
   if(routes[method][0].route == URL){
        routes[method][0].func();
    } 
    else if (/\/students\/([a-zA-Z0-9\-_]*)/.test(routes[method][0].route)){
        routes[method][0].func();
    }
    else if (/\/students\/([a-zA-Z0-9\-_]*)/.test(routes[method][1].route)){
        routes[method][1].func();
    }          
    res.end();
});

// P.S KO ISKOPORAV OD KODOT NA CHAS I SAMO DODAODV TOA SHTO FALI 
