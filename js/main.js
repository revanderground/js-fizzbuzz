const ulElement = document.querySelector('ul.list')
 

for (let index = 1; index < 101 ; index++) {
    let n=index;
    let liElement = document.createElement('li'); 
    liElement = n;
    if (n % 3 == 0 && n% 5 == 0){
        console.log("fizzbuzz"); 
        ulElement.append("fizzubuzz"); 

    } else if(n % 3 == 0){
        console.log("fizz");
        ulElement.append("fizz"); 
    } else if (n % 5 ==0){
        console.log("buzz");
        ulElement.append("buzz"); 
    } else {
        console.log(n);
        ulElement.append(n); 
    }     
}
