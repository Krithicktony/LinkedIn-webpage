
function myFunction() {
    let x = document.getElementById("cpass").value;
    let y = document.getElementById("mail").value;

    if (x == "") {
        document.getElementById("demo1").innerHTML="Please enter your password";
      } else {
        document.getElementById("demo1").innerHTML="Invalid Password";
    } 
    if (y == "") {
        document.getElementById("demo").innerHTML="Please enter your Email";
      } else {
        document.getElementById("demo").innerHTML="Invalid Email";
    }
    event.preventDefault();
}
  
