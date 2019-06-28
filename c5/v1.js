var getAllStudents = () => {console.log(`get all students`); };
var getStudent = () => {console.log(`get  student`);};
var storeStudent = () => {console.log(`store student`);};
var deleteStudent = () => {console.log(`delete student`);};
var updateStudent = () => {console.log(`update student`);};
var patchStudent = () => {console.log(`patch student`)};

var routes = {
    get: [
        {
            route: `/students`,
            func: getAllStudents
        },
        {
            route: `/students/id`,
            func: getStudent
        }
    ],
    post: [
        { route: `/students`, func: storeStudent }
    ],
    put: [
        {route: `/students/:id`, func: updateStudent }
    ],
    patch: [
        {route: `/students/:id`, func: patchStudent}
    ],
    delete: [
        {route: `/students/id`, func, deleteStudent}
    ],
     
};
var regmatch = true;
var index = undefined;
var server = http.createServer((req, res) => {
    for(let i = 0, i < routes[req.method.toLowerCase()].length; i++){
        console.log(routes[req.method.toLowerCase()] [i].route);
        console.log(routes[req.url){
            if(route === req.url){
                index = i;
                regmatch = false;
                break;
            }
        }
        if(regmatch){
            for(let i=0; routes[req.method.toLowerCase()].length; i++){
                var route = routes[req.method.toLowerCase()][i].route;
                var reroute = route.replace(/(:[a]))
            }
        }
        
    }
}

server.listen(8080,(err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(`Server started succesfully`);
});