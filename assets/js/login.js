function AddRow()
{
  var usernamee = document.getElementById("usernamee").value;
  var passwordd = document.getElementById("passwordd").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  if (usernamee==""|| passwordd==""|| email==""|| phone=="") {
    return false;
  }
  else {
  google.script.run.AddRecord(usernamee,passwordd,email,phone);
  document.getElementById("page2_id1").className = "page2_id1-off";
  document.getElementById("page3_id1").className = "page3_id1";
 }
}

 function LoginUser()
{
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
google.script.run.withSuccessHandler(function(output) 
{
  if(output == 'TRUE')
  {
     document.getElementById("displayusername").innerHTML = username;
     document.getElementById("page1_id1").className = "page1_class1-off";
     document.getElementById("page4_id1").className = "page4_id1";    
  }
  else if(output == 'FALSE')
  {
    document.getElementById("errorMessage").innerHTML = "Invalid data";     
  }    
}).checkLogin(username, password);
}

function function1(){
document.getElementById("page1_id1").className = "page1_class1-off";
document.getElementById("page2_id1").className = "page2_id1";
}

function function3(){ 
document.getElementById("page3_id1").className = "page3_id1-off";
document.getElementById("page1_id1").className = "page1_id1"; 
}
