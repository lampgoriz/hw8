//var F0 = 0;
//var F1 = 1;
//var n = 25;
//var F = 0;
//var Fn_1= 0;
//var Fn_2 = 0;
//var temp1 = 0;
//var temp2 = 0;
//
//for(var i = 0; i<25;i++){
//    
//    
//    Fn_1 = F;
//    F = Fn_1 + Fn_2;
//    
//    console.log(F);
//}


const fib = n => {
  let prev = 0, next = 1;
  for(let i = 0; i < n; i++){
    let temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
}