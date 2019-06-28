var routes = {
    get: [],
    post: [],
    put: [],
    patch: [],
    delete: [],
};
var get = (route, fn) => {
    routes.get.push({
        route: route,
        func: fn,
        regex: prepareRegex(route)
    });
};
var post = (route, fn) => {
    routes.post.push({
        route: route,
        func: fn,
    });
};
var put = (route, fn) => {
    routes.put.push({
        route: route,
        func: func,
    });
};
var patch = (route, fn) => {
    routes.patch.push({
        route: route,
        func: fn,
    });
};
var del = (route, fn) => {
    routes.del.push({
        route: route,
        func: fn,
    });
};

var prepareRegex = (str) => {
    str.replace(/\//g, `\/` );
    console.log(str.replace(/\//, `^`));
}
get(`/student/:id`, () => {
    console.log(`test`);
});