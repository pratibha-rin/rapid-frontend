// JavaScript Document

// Action on button press
function subscribeUser()
{
 if ( !isValidEmail())
 {
	 txtEmail.className = "textboxError"; // border becomes red
	 lblErr.style.color = "#FF0000";
	 lblErr.innerHTML = "Invalid Email value";
 }
	else
		window.open("Thankyou.html","_self","",true);

}

// while user is typing the email
function textIsChanging(){
	if ( !isValidEmail()){
	 txtEmail.className = "textboxError";
	 lblErr.style.color = "#FF0000";
	 lblErr.innerHTML = "A valid email is required";
 }
	else
	{	
		txtEmail.className="textbox"; //blue highlight
	   lblErr.innerHTML="";//error message is emptied
	}
	
}

function isValidEmail(){
	var email = txtEmail.value;
	///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	
	// Regular Expression ( regex )
	var emailFormat=/^[a-zA-Z0-9-.!#$%&]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/
	
	if ( email.match(emailFormat)) // match method checks if the content matches the regex 
		return true;
	else
		return false;
}