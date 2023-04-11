
// -----------Q1---------
function addNumber(num) {
    return function(x) {
        return x + num;
    }
}
// Example usage:
const addFive = addNumber(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25

// ---------Q2---------
function searchArray(array, value) {
    // Base case: if the array is empty, the value is not found
    if (array.length === 0) {
        return false;
    }
    
    // Check if the first element of the array matches the value
    if (array[0] === value) {
      return true;
    }
    
    // Recursive case: call the function with the rest of the array
    return searchArray(array.slice(1), value);
}


// ---------Q3---------
const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);

// ---------Q4---------
function addListItem(text) {
    // Find the unordered list element
    const list = document.querySelector('ul');
  
    // Create a new list item element
    const newItem = document.createElement('li');
  
    // Set the text content of the new item to the argument passed to the function
    newItem.textContent = text;
  
    // Add the new item to the end of the list
    list.appendChild(newItem);
}

// ---------Q5---------
function changeBackgroundColor(element, color) {
    // Set the background color of the element using the style property
    element.style.backgroundColor = color;
}


// ---------Q6---------
let newObject = window.localStorage.getItem("myObject"); console.log(JSON.parse(newObject));



// ---------Q7---------
function retrieveFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    
    if (!storedObject) {
      // If the key is not found in localStorage, return null or throw an error
      return null;
    }
    
    return JSON.parse(storedObject);
}




// ---------Q8---------
  function saveToLocalStorage(object) {
    for (let property in object) {
      localStorage.setItem(property, JSON.stringify(object[property]));
    }
  
    const retrievedObject = {};
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      retrievedObject[key] = JSON.parse(localStorage.getItem(key));
    }
  
    return retrievedObject;
  }
  const myObject = {
    name: "John",
    age: 30,
    email: "john@example.com"
  };
  
  const retrievedObject = saveToLocalStorage(myObject);
  
  console.log(retrievedObject);