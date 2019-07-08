var PartialUpdateFood = (req, res) => {
    res.send('test');
    var check = (req.body.name != undefined && req.body.name != "" && req.body.name.length > 0)
        || req.body.price != undefined
        || req.body.calories != undefined;

    if(!check){
        return res.status(400).send('Bad request');
    }
    fs.readFile('./food_list.json', 'utf8', (err, data) => {
        if(err){
            return res.send('Could not read file');
        }
        var jData = JSON.parse(data);
        var index = null;
        for(let i = 0; i < jData.length; i++){
            if(jData[i].id == req.params.id){
                index = i;
                break;
            }
        }

        // if(req.body.name != undefined && req.body.name != ""){
        //     jData[index].name = req.body.name;
        // }

        // if(req.body.price != undefined && req.body.price != ""){
        //     jData[index].price = req.body.price;
        // }

        // if(req.body.calories != undefined && req.body.calories != ""){
        //     jData[index].calories = req.body.calories;
        // }

        for(var i in jData[index]){
            if(req.body[i] != undefined && req.body[i] != ""){
                jData[index][i] = req.body[i];
            }
        }

        fs.writeFile('./food_list.json', JSON.stringify(jData), (err) => {
            if(err){
                return res.status(500).send('Could not save file');
            }
            return res.status(200).send('OK');
        });
    });
}

var DeleteFood = (req, res) => {
    <body>
    <h1>Hello World!</h1>
    <button id="get-food-btn">Get Food</button>
    <table border="1" width="50%">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>calories</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody class="data">

        </tbody>
    </table>
    <script>
        var dataContainer = document.querySelector('.data');
        var getFoodBtn = document.querySelector('#get-food-btn');
        getFoodBtn.addEventListener('click', (e) => {
            fetch('http://127.0.0.1:8080/food')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // console.log(data);
                for(let i = 0; i < data.length; i++){
                    var tr = document.createElement('tr');
                    var td1 = document.createElement('td');
                    td1.innerText = data[i].id;
                    tr.append(td1);
                    var td2 = document.createElement('td');
                    td2.innerText = data[i].name;
                    tr.append(td2);
                    var td3 = document.createElement('td');
                    td3.innerText = data[i].price;
                    tr.append(td3);
                    var td4 = document.createElement('td');
                    td4.innerText = data[i].calories;
                    tr.append(td4);
                    var td5 = document.createElement('td');
                    // td5.innerText = data[i].id;
                    var delBtn = document.createElement('button');
                    delBtn.innerText = 'Delete';
                    delBtn.addEventListener('click', function(e) {
                        var parent = this.parentNode.parentNode
                        // alert(`Delete ${data[i].id}`);
                        fetch(
                            `http://127.0.0.1:8080/food/${data[i].id}`,
                            {method: 'delete'}
                        )
                        .then(res => res.text())
                        .then(data => {
                            parent.remove();
                            console.log('deleted');
                        });
                    });
                    td5.append(delBtn);
                    tr.append(td5);
                    dataContainer.appendChild(tr);
                }
            });
        });
    </script>