// Create const for numbers
const container = document.getElementById("container");

// cycle numbers from 1 to 100
for(let i = 1; i<=100;i++){

  // assigne to element var new html element
  element = document.createElement("span");

  // apply condition if number can be divisible:
  if(i % 3 === 0 && i % 5 === 0){  // divisible by 3 and 5

    // assign to item var fizzbuzz string
    item = "FizzBuzz";

    // add class to element
    element.classList.add("fizzbuzz");

  }else if(i % 3 === 0){  // divisible by 3

    // assign to item var fizz string
    item = "Fizz";

    // add class to element
    element.classList.add("buzz");  
   
  }else if(i % 5 === 0){  // divisible by 5

    // assign to item var buzz string
    item = "Buzz";

    // add class to element
    element.classList.add("fizz");  
  }
  // otherwise cycle work normally
  else{item = i
  }

  // Add element var (has alrdy assigned span element)
  container.append(element);

  // Add item var to new html element (span)
  element.append(item);

}