# Lab5.2
Reflection Questions

1. How did event.preventDefault() help in handling form submission?

event.preventDefault() helped me in handling form submission by allowing me to stop the default submission which would refresh my page immediately. This in turn allowed me show error messages next to the fields, run custom validation checks, save the username to local storage and display a success message.

2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

The difference between using HTML5 validation attributes and Javascript-based validation is Javascript gives you more room for creativity and control like styling invalid fields and writing custom error messages. HTML5 is different because it has built in checks with more limited code. The browser automatically enforces these rules by default. When both are combined and used together the HTML5 attributes would act as the main layer of validation, while the Javascript would add more functionality to the web page by adding real-time feedback.

3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?

I used localStorage to persist and retrieve the username by first saving the username using localStorage.setItem("username", username.value); after the form was successfuly submitted. I then used const savedUsername = localStorage.getItem("username"); after the page load to pre-fill it in the input field. Some limitations of localStorage for storing sensitive data would be that its not the most secure place to store sensitive info because anyone can access to the browser or device can view it. Also data in localStorage is usually stored as plain text in the browser.

4. Describe a challenge you faced in implementing the real-time validation and how you solved it.

One challenge that I faced while implementing real-time validation was making sure custom error messages were correctly cleared when user fixed their input. To solve this challenge I added a clearError() function to remove the text and invalid css class after the field was validated. This fixed all errors and updated immediately rather than just on submit.

5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I ensured that custom error messages are user-friendly and displayed at appropriate times by writing the error messages plain and simple. I also used <span> elements in each message to the feedback was easier to see. I also focused the first invalid input on submit so it would be easier for users to spot where to begin fixing.

