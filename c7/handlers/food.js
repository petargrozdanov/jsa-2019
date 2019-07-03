var fs = require('fs');

var GetAllFood = (req, res) => {
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            res.send('Could not read file');
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    });
};
var GetSingleFood = (req, res) => {
    fs.readFile(`./food/:id`, `utf8`, (err, data) => {
        if(err){
            res.send(`Could not read file`);
            return;
        }
       var  jData = JSON.parse(data);
       var  out = jData.filter((o) => {

       })
    })
};
var CreateNewFood = (req, res) => {
    fs.readFile(`./food`, `utf8`, (err, data) => {
        if(err){
            res.send(`Could not read file`);
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
};
var UpdateFood = (req, res) => {
    fs.readFile(`./food/:id`, `utf8`, (err, data) => {
        if(err){
            res.send(`Could not read file`);
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
};
var PartialUpdateFood = (req, res) => {
    fs.readFile(`./food/:id`, `utf8`, (err, data) => {
        if(err){
            res.send(`Could not read file`);
            return;
        }
        jData = JSON.parse(data);
        res.send(jData);
    })
};
var DeleteFood = (req, res) => {
    fs.readFile(`./food/:id`, `utf8`, (err, data) => {
        if(err){
            res.send(`Could not read file`);
            return;
        }
        jData = JSON.parse(data);
        res.send(jData); 
    })
};




module.exports = {
    GetAllFood,
    GetSingleFood,
    CreateNewFood,
    UpdateFood,
    PartialUpdateFood,
    DeleteFood
};