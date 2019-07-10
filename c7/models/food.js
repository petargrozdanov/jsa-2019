va fs = require (`fs`);

const foodFile = `./food_list.json`;
var GetAll = () => {
    return new Promise((success, fail) => {
        fs.readFile('./food_list.json', 'utf8', (err, data) => {
            if(err){
                res.send('Could not read file');
                return fail(err);
            }
            return success (JSON.parse(data));
        });
    });
}