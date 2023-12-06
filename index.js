document.addEventListener("DOMContentLoaded", function() {
    var enterButton = document.querySelector(".claim");
  
    enterButton.addEventListener("click", function() {
      var fname = document.getElementById("fname").value;
      var lname = document.getElementById("lname").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      if (fname === "" || lname === "" || email === "" || password === "") {
        alert("Please enter all information, you miss first name or last name or email or password");
      } else {
        alert("You Sign in successfully");
      }
    });
});
  