class Producto {
    ID;
    Nombre;
    Cantidad;
    Estado;

    constructor(ID, Nombre, Cantidad, Estado) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Cantidad = Cantidad;
     
        this.Estado =Estado ? Estado:"Inactivo";
    }
}

class Cliente { 
    ID;
    Nombre;
    Estado;
    FechaCreacion;
    

    constructor(ID, Nombre, Estado, FechaCreacion) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Estado =Estado ? Estado:"Inactivo";
        this.FechaCreacion = FechaCreacion;
    }
}

var Tabla = [];

let inp = steponup();
let IDCL = steponupCL();

let Clientes1 = new Cliente(IDCL.value, document.getElementById('idcl2').value, document.getElementById('idcl3').value, document.getElementById('idcl4').value);

let Producto1 = new Producto(inp.value, document.getElementById('id2').value, document.getElementById('id3').value)

let num = document.getElementById('id1').value

let change = function change() {
    document.getElementById('LABEL').textContent = "";
    
}
let changecl = function change() {
    document.getElementById('LABELCL').textContent = "";
    
}

let ID = document.getElementById("f")


function createProduct() {
   

    if (
        document.getElementById('id2').value == ""

    ) {
        document.getElementById('LABEL').textContent = "PORFAVOR LLENAR LOS CAMPOS";

        setTimeout(change, 3000)

        return Producto1;
    }

    else

    
        Producto1 = new Producto(inp.value, document.getElementById('id2').value, document.getElementById('id3').value)

    document.getElementById('id1').stepUp()

    armfunction()
Clear()
}

function armfunction(){

    let button = document.createElement("button");

    button.innerText = "buy";
    button.className = "btn_buy";

    let button2 = document.createElement("button");

    button2.innerText = "delete";
    button2.className = "btn_delete";
    button2.setAttribute('onclick', 'borrarFuncion(this)');
   
    let buttonup = document.createElement("button");

    buttonup.innerText = "↑";
    buttonup.className = "btn_up";
    buttonup.style.width = '2px';
    buttonup.style.alignSelf = "right";
    buttonup.style.visibility = "hidden";
    
    let buttondown = document.createElement("button");

    buttondown.innerText = "↓";
    buttondown.className = "btn_down";
    buttondown.style.width = "2px";
  buttondown.style.textAlign = "right";
  buttondown.style.visibility = "hidden";
    

  //botones start


 


    var select = document.createElement("select");
    select.setAttribute("id", "mySelect");


    var table = document.getElementById("MYTABLE");

    var row = table.insertRow(3);
    
    table.appendChild(row)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.setAttribute("contentEditable", true);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = Producto1.ID;
    cell2.innerHTML = Producto1.Nombre;
    cell3.innerHTML = Producto1.Cantidad;
    cell4.innerHTML = Producto1.Estado;
    cell5.append(button);
    cell6.append(button2);
    cell3.appendChild(buttonup);
    cell3.appendChild(buttondown);
    cell3.className ="button";
    

    row.setAttribute("id", "myId");
    
  
    if (cell3.innerHTML.includes("0"))
{
    cell4.innerHTML = Producto1.Estado
}
else
{
    cell4.innerHTML ="Activo"
}
    
    cell3.addEventListener("mouseover", function(){
        buttonup.style.visibility ="visible"
        buttondown.style.visibility ="visible"
      });
      cell3.addEventListener("mouseout", function(){
        buttonup.style.visibility ="hidden"
        buttondown.style.visibility ="hidden"
      });

      buttonup.addEventListener("click", function(){
        this.parentNode.removeChild(buttondown);
        this.parentNode.removeChild(buttonup);
let change = cell3.innerText;

change = Number(change);

change = change + 1;


change = String(change)

cell3.innerText = change;
if (cell3.innerHTML == 0||cell3.innerHTML.includes("-"))
{
    cell4.innerHTML = Producto1.Estado
}
else
{
    cell4.innerHTML ="Activo"
}

cell3.appendChild(buttonup);
    cell3.appendChild(buttondown);



        
      });
      buttondown.addEventListener("click", function(){
        this.parentNode.removeChild(buttonup);
        this.parentNode.removeChild(buttondown);
let change = cell3.innerText;

change = Number(change);

change = change - 1;

change = String(change)

cell3.innerText = change;

if (cell3.innerHTML ==0||cell3.innerHTML.includes("-") )
{
    cell4.innerHTML = Producto1.Estado
}
else
{
    cell4.innerHTML ="Activo"
}

cell3.appendChild(buttonup);
    cell3.appendChild(buttondown);

});


}    
function borrarFuncion(oButton)
{
    let empTab = document.getElementById('MYTABLE');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr

    };

    function borrarFuncion(oButton)
{
    let empTab = document.getElementById('MYTABLE2');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr

    };

//     var z = document.createElement("option");
//     z.setAttribute("value", "Disponible");
//     var t = document.createTextNode("Disponible");
//     z.appendChild(t);
//     select.appendChild(z);

//     var a = document.createElement("option");
//     a.setAttribute("value", "Agotado");
//     let q = document.createTextNode("Agotado");
//     a.appendChild(q);
//     select.appendChild(a);

//     cell4.addEventListener("click", function () {


//         cell4.append(select)
//     });

//     select.addEventListener("change", function () {
//         cell4.innerHTML = select.value
//     });





//     button.addEventListener("click", function () {
//         document.getElementById('a').textContent = cell1.innerHTML
//         document.getElementById('b').textContent = cell2.innerHTML
//         document.getElementById('c').textContent = cell3.innerHTML
//         document.getElementById('d').textContent = cell4.innerHTML
//     });
//     button2.addEventListener("click", function () {


//         
         
//     });



//     if (cell3.innerHTML == 0) {

//         cell4.innerHTML = "Agotado"
//     }
//     else {
//         if (cell3.innerHTML > 1)
//             cell4.innerHTML = "Disponible"
//     }

function Clear(){
    Producto1 = new Producto("", '', "", "")

    document.getElementById('a').textContent = ""
    document.getElementById('b').textContent = ""
    document.getElementById('c').textContent = ""
    document.getElementById('d').textContent = ""

    document.getElementById('id2').value = ""
    document.getElementById('id3').value = "0"

    return Producto1;


 }
 function ClearCL(){
    C = new Cliente("", '', "", "")


    document.getElementById('idcl2').value = ""
    document.getElementById('idcl4').value = ""

    return Producto1;


 }


function steponup(){
    let input = document.getElementById("id1")
    input.stepUp()

    return input
}
function steponupCL(){
    let IDCL = document.getElementById("idcl1")
    IDCL.stepUp()

    return IDCL;
}


//Clientes


function createCliente(){
if( 
    document.getElementById('idcl2').value == "" 
    ||document.getElementById('idcl4').value ==""
   
  ) {
        document.getElementById('LABELCL').textContent="PORFAVOR LLENAR LOS CAMPOS";


        setTimeout(changecl, 3000)
        
       
return;
}

else


    Clientes1 = new Cliente(IDCL.value, document.getElementById('idcl2').value, document.getElementById('idcl3').value, document.getElementById('idcl4').value)

document.getElementById('idcl1').stepUp()



let buttonCL = document.createElement("button");

buttonCL.innerText = "buy";
buttonCL.className = "btn_buy";

let button2CL = document.createElement("button");

button2CL.innerText = "delete";
button2CL.className = "btn_delete";
button2CL.setAttribute('onclick', 'borrarFuncion(this)');



var table = document.getElementById("MYTABLE2");

var row = table.insertRow(3) ;
table.appendChild(row)
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
cell1.innerHTML = Clientes1.ID;
cell2.innerHTML = Clientes1.Nombre;
cell3.innerHTML = Clientes1.Estado;
cell4.innerHTML = Clientes1.FechaCreacion;

cell5.append(button2CL);

ClearCL();
cell4.addEventListener ("click",function(){


cell4.append(select)
});

select.addEventListener ("change",function(){
cell4.innerHTML = select.value});



cell2.addEventListener("click",function(){
let v = prompt()

    
    if (v === null) {
        return;
    }
    this.innerHTML = v
});
button.addEventListener("click",function(){
    document.getElementById('a').textContent = cell1.innerHTML 
    document.getElementById('b').textContent = cell2.innerHTML
    document.getElementById('c').textContent= cell3.innerHTML
    document.getElementById('d').textContent= cell4.innerHTML
});
button2CL.addEventListener("click",function(){

   
     row.remove(this)
    ();
});



if (cell3.innerHTML == 0)
{

cell4.innerHTML = "Agotado"
}
else
{
if(cell3.innerHTML > 1 )
cell4.innerHTML ="Disponible"

else{
if (cell3.innerHTML < 1 )

alert("ERROR EN CANTIDAD")
;
}
throw new Error("Yes")
}


Producto1 = new Producto("",'',"","")

document.getElementById('a').textContent = "" 
document.getElementById('b').textContent = "" 
document.getElementById('c').textContent= "" 
document.getElementById('d').textContent= ""

    document.getElementById('id2').value = "" 
    document.getElementById('id3').value="0" 
    

   
return Producto1;


}


