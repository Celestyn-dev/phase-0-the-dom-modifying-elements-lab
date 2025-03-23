// Write your code here!
// Remove the existing main element
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// Create a new element
const newHeader = document.createElement("h1");

// Set ID of the new element
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "Celestine Mecheo is the champion";

// Append the new element to the body
document.body.appendChild(newHeader);

// Create a new div element
const element = document.createElement("div");
document.body.append(element);

// Create an unordered list
const ul = document.createElement("ul");

// Populate the unordered list with 3 list items
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}

// Append the list to the div
element.append(ul);

// Modify styles using JavaScript
newHeader.style.fontSize = "32px";
newHeader.style.color = "blue";
newHeader.style.textAlign = "center";

// Add a class to the header
newHeader.classList.add("champion-heading");
