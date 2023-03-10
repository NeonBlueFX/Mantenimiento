


function Registrar(){

    var user ="";
    var password ="";
    if(document.getElementById("USER").value == "" || document.getElementById("PASSWORD").value == "")
    {
    alert("INGRESE LOS VALORES")
    }
else
{
    alert("Se registro el usuario")
    user = document.getElementById("USER").value;
    password = document.getElementById("PASSWORD").value;

    sessionStorage.setItem("user", user)
    sessionStorage.setItem("password", password)
   window.location.href ="Login.html"

    console.log(user, password)


    
    return;

    
}
    
}

function login()
 {
       

var user = sessionStorage.getItem("user");
var password = sessionStorage.getItem("password");
// var user = "Joel"
// var password = "12345"

    var userlOG = document.getElementById("USERLog").value
    var PassLog = document.getElementById("PasswordLog").value

    console.log(user)


   if(userlOG !== user)
   {
    do
    {
    alert("LAS CREDENCIALES NO COINCIDEN")
    break;
    }

while(userlOG !== user);
   }
   else
   
   

if(PassLog !== password)
{
do
{
alert("LAS CREDENCIALES NO COINCIDEN")
break;
}
while(PassLog !== password);
}
else

if(userlOG == user && PassLog == password)
{
    alert("Bienvenido")
    window.location.href ="index.html"
}
}
function logOff()
   {
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("password")

    window.location.reload();
   }

function logIn()
   {
    window.location.href="Login.html"
   }

  