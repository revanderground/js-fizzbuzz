
for (let index = 1; index < 100 ; index++) {
    let n=index;
    if (n % 3 == 0 && n% 5 == 0){
        console.log("fizzbuzz");        
    } else if(n % 3 == 0){
        console.log("fizz");
    } else if (n % 5 ==0){
        console.log("buzz");
    } else console.log(n);
         
}
