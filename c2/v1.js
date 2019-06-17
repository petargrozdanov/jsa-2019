// sekoj tret paren broj
function everyThird(){
    var i = 0;
    var b = 0;
    while(i < 100){
        i++;
        if(i % 2 == 0){
            b++;
        }
        if(i % 2 == 0 && b == 3){
            console.log(i);
            b = 0;
        }
    }
}
everyThird();

