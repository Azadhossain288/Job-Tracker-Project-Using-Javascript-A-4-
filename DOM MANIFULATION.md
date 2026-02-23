Given below the answer of question:

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById()
Selects one single element using its id.
Returns one element or null.

getElementsByClassName()
Selects multiple elements using a class name.
Returns a live HTMLCollection.

querySelector()
Selects the first matching element using CSS selectors.

querySelectorAll()
Selects all matching elements using CSS selectors.
Returns a static NodeList.




2. How to create and insert a new element into the DOM

Steps:

Create the element
Add content or attributes
Insert it into the DOM

const div = document.createElement("div");
div.textContent = "Hello World";
document.body.appendChild(div);




3. What is Event Bubbling? How does it work?

Event Bubbling means an event starts from the target element and then moves upward to parent elements.

Example:

Click on a button
Event fires on the button
Then on its parent
Then on body
Then on document
This is the default behavior in JavaScript events.





4. What is Event Delegation? Why is it useful?

Event Delegation means attaching one event listener to a parent element instead of multiple child elements.
The parent handles events using event bubbling.

Example:
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Item clicked");
  }
});

Why useful?
Better performance
Less memory usage
Works for dynamically added elements





5. Difference between preventDefault() and stopPropagation()

preventDefault()
Stops the default browser action
(e.g., stopping form submission)

stopPropagation()
Stops the event from bubbling up to parent elements

Example:

event.preventDefault();     // stops default behavior
event.stopPropagation();    // stops event bubbling
