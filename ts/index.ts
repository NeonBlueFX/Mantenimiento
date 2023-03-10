

class Producto {
    ID:number;
    Nombre:string;
    Cantidad:number;
    Estado:string;

    constructor(ID:number, Nombre: string, Cantidad:number, Estado:string) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Cantidad = Cantidad;

        this.Estado = Estado ? Estado : "Inactivo";
    }
}

class Cliente {
    ID:number;
    Nombre:string;
    Estado:string;
    FechaCreacion:string;


    constructor(ID:number, Nombre:string, Estado:string, FechaCreacion:string) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Estado = Estado ? Estado : "Inactivo";
        this.FechaCreacion = FechaCreacion;
    }
}
var wrapper =document.getElementById('div1');
var tableta =document.getElementById("MYTABLE")

var idproducto =document.getElementById("IDProductos") as HTMLInputElement
var nombre = document.getElementById("NombreProductos") as HTMLInputElement
var cantidad = document.getElementById("CantidadProductos") as HTMLInputElement
var agregar = document.getElementById("but3")
var idcliente =document.getElementById("IdClientes")

var nombreCliente = document.getElementById("NombreClientes") as HTMLInputElement
var estadoCliente = document.getElementById("EstadoClientes") as HTMLSelectElement
var agregarCliente = document.getElementById("clbut2")
var LogBtn = document.getElementById("logbtn")
var logTEXT = document.getElementById("LOGTEXT")
var useruser = document.getElementById("USERinpage")
var userLOGIN = document.getElementById("LOG")
window.onload = function () {
    useruser!.textContent = sessionStorage.getItem("user")

    if (useruser!.textContent == '') {
        userLOGIN!.textContent = "Iniciar Sesion"
        logTEXT!.textContent = "LOG IN"
        LogBtn!.removeAttribute("onclick")
        LogBtn!.setAttribute("onclick", "logIn()")
        wrapper!.setAttribute("onclick", "alert('No esta Registrado')")
        idproducto!.setAttribute("Disabled","true")
         agregar!.setAttribute("Disabled","true")
         nombre!.setAttribute("Disabled","true")
         cantidad!.setAttribute("Disabled","true")
         idcliente!.setAttribute("Disabled","true")
         agregarCliente!.setAttribute("Disabled","true")
         nombreCliente!.setAttribute("Disabled","true")
         estadoCliente!.setAttribute("Disabled","true")
        tableta!.style.backgroundColor=""

        cantidad!.ariaReadOnly="true";
    }
}





function currentdate() {

    var date = new Date().toLocaleString("es-DO", { month: '2-digit', day: '2-digit', year: 'numeric' });

    return date;
}




function createProduct() {

    let changePR = function change() {
        document.getElementById('Warning')!.textContent = "";

    };


    if (
        nombre.value == ""

    ) {
        document.getElementById('Warning').textContent = "PORFAVOR LLENAR LOS CAMPOS";

        setTimeout(changePR, 3000)


    }

    else



        //llamado de funciones
        armfunction()
    Clear()




}

function armfunction() {

    let buttonEDIT = document.createElement("button");

    buttonEDIT.innerText = "Editar";
    buttonEDIT.className = "btn_buy";
    

    let buttonDELETE = document.createElement("button");

    buttonDELETE.innerText = "delete";
    buttonDELETE.className = "btn_delete";
    buttonDELETE.setAttribute('onclick', 'borrarFuncion(this)');

    let buttonup = document.createElement("button");

    buttonup.innerText = "↑";
    buttonup.className = "btn_up";
    buttonup.style.width = '2px';
    buttonup.style.alignSelf = "right";
    buttonup.style.visibility = "hidden";
    buttonup.style.height = "50px";

    

    let buttondown = document.createElement("button");

    buttondown.innerText = "↓";
    buttondown.className = "btn_down";
    buttondown.style.width = "2px";
    buttondown.style.textAlign = "right";
    buttondown.style.visibility = "hidden";
    buttondown.style.height = "50px";


    let ImagenProducto = document.getElementById("ImagenProductos") as HTMLInputElement
    const file = (ImagenProducto.files[0])
    var reader = new FileReader();
    let imageProducto = document.createElement("img")
    imageProducto.id ="prodimg"
    imageProducto.alt="hello"
    imageProducto.width= 50
    imageProducto.height= 50
    imageProducto.src = URL.createObjectURL(file)
    


      
    //botones start

    var IDPRODUCTOS:unknown = steponup() 
    var NombreProducto = nombre.value
    var CantidadProducto: unknown = cantidad.value
    var Producto1 = new Producto(IDPRODUCTOS  as number -1, NombreProducto, CantidadProducto as number,"")




    var select = document.createElement("select");
    select.setAttribute("id", "mySelect");


    var table = document.getElementById("MYTABLE") as HTMLTableElement

    var row: HTMLTableRowElement = table.insertRow(3);

    table.appendChild(row)
     
    let cell1: HTMLTableCellElement = row.insertCell(0)
    let cell2: HTMLTableCellElement  = row.insertCell(1);
    
    let cell3: HTMLTableCellElement = row.insertCell(2);
    let cell4: HTMLTableCellElement = row.insertCell(3);
    let cell5: HTMLTableCellElement = row.insertCell(4);
    let cell6: HTMLTableCellElement = row.insertCell(5);
    let cell7: HTMLTableCellElement = row.insertCell(6);
    cell1.style.fontSize="20px"
    cell2.style.fontSize="20px"
    cell3.style.fontSize="30px"

    cell4.style.fontSize="20px"
    
 cell2.setAttribute("class", "CELL2")

    cell1.innerHTML = String(Producto1.ID);
    cell2.innerHTML = Producto1.Nombre;
    cell3.innerHTML = String(Producto1.Cantidad);
    cell4.innerHTML = Producto1.Estado;

    cell5.append(buttonDELETE);
    cell6.append(buttonEDIT);
    cell7.append(imageProducto)

    if (cell3.innerText ==("0")) {
        cell4.innerHTML = Producto1.Estado
    }
    else {
        cell4.innerHTML = "Activo"
        console.log(cell3.innerHTML)
    }

    cell3.appendChild(buttonup);
    cell3.appendChild(buttondown);
    cell3.className = "button";

    table.style.overflow = "scroll"
    row.setAttribute("id", "myId");



   

    cell3.addEventListener("mouseover", function () {
        buttonup.style.visibility = "visible"
        buttondown.style.visibility = "visible"
    });
    cell3.addEventListener("mouseout", function () {
        buttonup.style.visibility = "hidden"
        buttondown.style.visibility = "hidden"
    });

    buttonup.addEventListener("click", function () {
        this.parentNode.removeChild(buttondown);
        this.parentNode.removeChild(buttonup);
        let change:unknown = cell3.innerText;

        change = Number(change as number);
        change =(change as number + 1)


        change = String(change)

        if (change < 0) {
            change = "0"
        }

        cell3.innerText = change as string;
        if (cell3.innerText == "0") {
            cell4.innerHTML = Producto1.Estado
        }
        else {
            cell4.innerHTML = "Activo"
        }

        cell3.appendChild(buttonup);
        cell3.appendChild(buttondown);




    });
    buttondown.addEventListener("click", function () {
        this.parentNode.removeChild(buttonup);
        this.parentNode.removeChild(buttondown);
        let change:unknown = cell3.innerText;

        change = (change as number - 1)

        if (change < 0) {
            change = 0
        }

        change = (change as string)
       
    
    

        cell3.innerText = change as string;
        if (cell3.innerText == "0") 
        {
            cell4.innerHTML = Producto1.Estado
            console.log(Producto1.Estado)
            
        }
        else {
            cell4.innerHTML = "Activo"
            console.log(cell3.innerText)
        }
       

        cell3.appendChild(buttonup);
        cell3.appendChild(buttondown);
       

    });
    buttonEDIT.addEventListener("click", function () 
    {
        cell2.setAttribute("contentEditable", "true");
        cell2.setAttribute("onkeypress", "return (this.innerText.length <= 15)")
        cell2.setAttribute("onpaste", "return (this.innerText.length <= 15)")
        cell2.focus();
        })
cell2.addEventListener("mouseout", function()
{
cell2.setAttribute("contentEditable", "false");

})

}

function borrarFuncion(oButton) {
    let empTab = document.getElementById('MYTABLE') as HTMLTableElement;
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); 

};
function borrarFuncionCL(oButton) {
    let empTab = document.getElementById('MYTABLE2') as HTMLTableElement;
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); 
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

function Clear() {
   let Producto1 = new Producto(0, '', 0, "")

    nombre.value =  null
    cantidad.value = "0"

    return Producto1;


}
function ClearCL() {
    let Clientes1 = new Cliente(0, '', "", "")


    nombreCliente.value = null



}


function steponup() {
    let input = document.getElementById("IDProductos") as HTMLInputElement
    input.stepUp()

    return input.value
}
function steponupCL() {
    let IDcliente = document.getElementById("IdClientes") as HTMLInputElement
    IDcliente.stepUp()

    return IDcliente.value;
}


//Clientes


function createCliente() {

    let changecl = function change() {
        document.getElementById('WarningCL').textContent = "";


    };

    if (
        nombreCliente.value == ""


    ) {
        document.getElementById('WarningCL').textContent = "PORFAVOR LLENAR LOS CAMPOS";


        setTimeout(changecl, 3000)


        return;
    }

    else

    var IDcliente: unknown = steponupCL()
    let date = currentdate();
    var nomCL:unknown = nombreCliente.value
    var estCL:unknown = estadoCliente.value
    let Clientes1 = new Cliente(IDcliente as number -1, nomCL as string, estCL as string, date)


    let button2CL = document.createElement("button");

    button2CL.innerText = "delete";
    button2CL.className = "btn_delete";
    button2CL.setAttribute('onclick', 'borrarFuncionCL(this)');



    var table = document.getElementById("MYTABLE2") as HTMLTableElement;

    var row = table.insertRow(3) as HTMLTableRowElement
    table.appendChild(row)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.contentEditable="true";
    cell2.setAttribute("onkeypress", "return (this.innerText.length <= 15)")
    cell2.setAttribute("onpaste", "return (this.innerText.length <= 15)")

    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = String(Clientes1.ID);
    cell2.innerHTML = Clientes1.Nombre;
    cell3.innerHTML = String(Clientes1.Estado);
    cell4.innerHTML = Clientes1.FechaCreacion;

    cell5.append(button2CL);

    ClearCL();

    console.log(cell3.innerHTML)



    cell3.onclick = function () {

        var swap = cell3.innerHTML;
        if (swap == "Activo") {
            cell3.innerHTML = "Inactivo";
        } else {
            cell3.innerHTML = "Activo";
        }

    };






    // button2CL.addEventListener("click", function () {


    //     row.remove(this)
    //         ();
    // });

}
function list() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

