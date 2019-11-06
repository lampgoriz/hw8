//var F1 = 1;
//var F0 = 0;

var F = 0;
var Fn_1= 1;
var Fn_2 = 0;
console.log(Fn_2);
console.log(Fn_1);

for(var i = 0; i<25;i++){
    F = Fn_1 + Fn_2;
    Fn_2 = Fn_1;
    Fn_1 = F;
    console.log(F);
}

