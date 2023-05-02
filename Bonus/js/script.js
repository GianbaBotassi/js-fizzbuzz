// Create const for numbers
const container = document.getElementById("container");

// cicla numeri
for(let i = 1; i<=1000;i++){
  if(i % 3 === 0 && i % 5 === 0){
    quadrato = "FizzBuzz";
  }else if(i % 5 === 0){
    quadrato = "Buzz";
  }else if(i % 3 === 0){
    quadrato = "Fizz";
  }
  else{quadrato = i
  }

  container.innerHTML += `<span class="square">${quadrato}`;

}