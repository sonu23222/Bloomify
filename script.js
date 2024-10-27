/**
 * JavaScript validation will work using events:
 * 
 * JavaScript events:
 *  -Form event (onsubmit, onchange etc.)
 *  -Window event (onload etc.)
 *  -Keyboard event (onkeyup, onkeydown etc.)
 *  -Mouse event(onclick, onfocus etc.)
 * 
 *  JavaScript selectors: (starts with document....)
 *   -getElementById('idname');
 *   -
 */
let form  = document.contact;
let fullname = form.fname,
    addr = form.addr,
    email = form.email;

//To handle event we have: addEventListener() method
//addEventListener("event", callback_function());
form.addEventListener("submit",function(e){
    // helloooo my name is sonu
    if(fullname.value == "") {
        // alert("Full name is required.");
        fullname.nextElementSibling.innerText = "Full name is required";
         e.preventDefault();
     }
     if(addr.value == "") {
        // alert("Full name is required.");
        addr.nextElementSibling.innerText = "Address is required";
         e.preventDefault();
     }
     if(email.value == "") {
        // alert("Full name is required.");
        email.nextElementSibling.innerText = "Email is required";
         e.preventDefault();
     }
});

