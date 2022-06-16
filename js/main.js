const numberWrapperRow=document.getElementById('number-wrapper');

 

for (let index = 1; index < 101 ; index++) {

    let flashyBox = document.createElement('div'); 
    flashyBox.classList.add('col-2', 'box');
    flashyBox.innerHTML = index
    if (index % 3 == 0 && index% 5 == 0){
        console.log("fizzbuzz"); 
        flashyBox = "fizzbuzz";
        numberWrapperRow.append(flashyBox); 

    } else if(index % 3 == 0){
        console.log("fizz");
        flashyBox = "fizz";
        numberWrapperRow.append(flashyBox); 
    } else if (index % 5 ==0){
        console.log("buzz");
        flashyBox = "buzz";
        numberWrapperRow.append(flashyBox); 
    } else {
        console.log(flashyBox);
        numberWrapperRow.append(flashyBox); 
    }     
}
