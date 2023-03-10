var Producto = /** @class */ (function () {
    function Producto(ID, Nombre, Cantidad, Estado) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Cantidad = Cantidad;
        this.Estado = Estado ? Estado : "Inactivo";
    }
    return Producto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(ID, Nombre, Estado, FechaCreacion) {
        this.ID = ID;
        this.Nombre = Nombre;
        this.Estado = Estado ? Estado : "Inactivo";
        this.FechaCreacion = FechaCreacion;
    }
    return Cliente;
}());
var wrapper = document.getElementById('div1');
var tableta = document.getElementById("MYTABLE");
var idproducto = document.getElementById("IDProductos");
var nombre = document.getElementById("NombreProductos");
var cantidad = document.getElementById("CantidadProductos");
var agregar = document.getElementById("but3");
var idcliente = document.getElementById("IdClientes");
var nombreCliente = document.getElementById("NombreClientes");
var estadoCliente = document.getElementById("EstadoClientes");
var agregarCliente = document.getElementById("clbut2");
var LogBtn = document.getElementById("logbtn");
var logTEXT = document.getElementById("LOGTEXT");
var useruser = document.getElementById("USERinpage");
var userLOGIN = document.getElementById("LOG");
window.onload = function () {
    useruser.textContent = sessionStorage.getItem("user");
    if (useruser.textContent == '') {
        userLOGIN.textContent = "Iniciar Sesion";
        logTEXT.textContent = "LOG IN";
        LogBtn.removeAttribute("onclick");
        LogBtn.setAttribute("onclick", "logIn()");
        wrapper.setAttribute("onclick", "alert('No esta Registrado')");
        idproducto.setAttribute("Disabled", "true");
        agregar.setAttribute("Disabled", "true");
        nombre.setAttribute("Disabled", "true");
        cantidad.setAttribute("Disabled", "true");
        idcliente.setAttribute("Disabled", "true");
        agregarCliente.setAttribute("Disabled", "true");
        nombreCliente.setAttribute("Disabled", "true");
        estadoCliente.setAttribute("Disabled", "true");
        tableta.style.backgroundColor = "";
        cantidad.ariaReadOnly = "true";
    }
};
function currentdate() {
    var date = new Date().toLocaleString("es-DO", { month: '2-digit', day: '2-digit', year: 'numeric' });
    return date;
}
function createProduct() {
    var changePR = function change() {
        document.getElementById('Warning').textContent = "";
    };
    if (nombre.value == "") {
        document.getElementById('Warning').textContent = "PORFAVOR LLENAR LOS CAMPOS";
        setTimeout(changePR, 3000);
    }
    else
        //llamado de funciones
        armfunction();
    Clear();
}
function armfunction() {
    var buttonEDIT = document.createElement("button");
    buttonEDIT.innerText = "Editar";
    buttonEDIT.className = "btn_buy";
    var buttonDELETE = document.createElement("button");
    buttonDELETE.innerText = "delete";
    buttonDELETE.className = "btn_delete";
    buttonDELETE.setAttribute('onclick', 'borrarFuncion(this)');
    var buttonup = document.createElement("button");
    buttonup.innerText = "↑";
    buttonup.className = "btn_up";
    buttonup.style.width = '2px';
    buttonup.style.alignSelf = "right";
    buttonup.style.visibility = "hidden";
    buttonup.style.height = "50px";
    var buttondown = document.createElement("button");
    buttondown.innerText = "↓";
    buttondown.className = "btn_down";
    buttondown.style.width = "2px";
    buttondown.style.textAlign = "right";
    buttondown.style.visibility = "hidden";
    buttondown.style.height = "50px";
    var ImagenProducto = document.getElementById("ImagenProductos");
    var file = (ImagenProducto.files[0]);
    var reader = new FileReader();
    var imageProducto = document.createElement("img");
    imageProducto.id = "prodimg";
    imageProducto.alt = "hello";
    imageProducto.width = 50;
    imageProducto.height = 50;
    imageProducto.src = URL.createObjectURL(file);
    //botones start
    var IDPRODUCTOS = steponup();
    var NombreProducto = nombre.value;
    var CantidadProducto = cantidad.value;
    var Producto1 = new Producto(IDPRODUCTOS - 1, NombreProducto, CantidadProducto, "");
    var select = document.createElement("select");
    select.setAttribute("id", "mySelect");
    var table = document.getElementById("MYTABLE");
    var row = table.insertRow(3);
    table.appendChild(row);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    cell1.style.fontSize = "20px";
    cell2.style.fontSize = "20px";
    cell3.style.fontSize = "30px";
    cell4.style.fontSize = "20px";
    cell2.setAttribute("class", "CELL2");
    cell1.innerHTML = String(Producto1.ID);
    cell2.innerHTML = Producto1.Nombre;
    cell3.innerHTML = String(Producto1.Cantidad);
    cell4.innerHTML = Producto1.Estado;
    cell5.append(buttonDELETE);
    cell6.append(buttonEDIT);
    cell7.append(imageProducto);
    if (cell3.innerText == ("0")) {
        cell4.innerHTML = Producto1.Estado;
    }
    else {
        cell4.innerHTML = "Activo";
        console.log(cell3.innerHTML);
    }
    cell3.appendChild(buttonup);
    cell3.appendChild(buttondown);
    cell3.className = "button";
    table.style.overflow = "scroll";
    row.setAttribute("id", "myId");
    cell3.addEventListener("mouseover", function () {
        buttonup.style.visibility = "visible";
        buttondown.style.visibility = "visible";
    });
    cell3.addEventListener("mouseout", function () {
        buttonup.style.visibility = "hidden";
        buttondown.style.visibility = "hidden";
    });
    buttonup.addEventListener("click", function () {
        this.parentNode.removeChild(buttondown);
        this.parentNode.removeChild(buttonup);
        var change = cell3.innerText;
        change = Number(change);
        change = (change + 1);
        change = String(change);
        if (change < 0) {
            change = "0";
        }
        cell3.innerText = change;
        if (cell3.innerText == "0") {
            cell4.innerHTML = Producto1.Estado;
        }
        else {
            cell4.innerHTML = "Activo";
        }
        cell3.appendChild(buttonup);
        cell3.appendChild(buttondown);
    });
    buttondown.addEventListener("click", function () {
        this.parentNode.removeChild(buttonup);
        this.parentNode.removeChild(buttondown);
        var change = cell3.innerText;
        change = (change - 1);
        if (change < 0) {
            change = 0;
        }
        change = change;
        cell3.innerText = change;
        if (cell3.innerText == "0") {
            cell4.innerHTML = Producto1.Estado;
            console.log(Producto1.Estado);
        }
        else {
            cell4.innerHTML = "Activo";
            console.log(cell3.innerText);
        }
        cell3.appendChild(buttonup);
        cell3.appendChild(buttondown);
    });
    buttonEDIT.addEventListener("click", function () {
        cell2.setAttribute("contentEditable", "true");
        cell2.setAttribute("onkeypress", "return (this.innerText.length <= 15)");
        cell2.setAttribute("onpaste", "return (this.innerText.length <= 15)");
        cell2.focus();
    });
    cell2.addEventListener("mouseout", function () {
        cell2.setAttribute("contentEditable", "false");
    });
}
function borrarFuncion(oButton) {
    var empTab = document.getElementById('MYTABLE');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
;
function borrarFuncionCL(oButton) {
    var empTab = document.getElementById('MYTABLE2');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}
;
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
    var Producto1 = new Producto(0, '', 0, "");
    nombre.value = null;
    cantidad.value = "0";
    return Producto1;
}
function ClearCL() {
    var Clientes1 = new Cliente(0, '', "", "");
    nombreCliente.value = null;
}
function steponup() {
    var input = document.getElementById("IDProductos");
    input.stepUp();
    return input.value;
}
function steponupCL() {
    var IDcliente = document.getElementById("IdClientes");
    IDcliente.stepUp();
    return IDcliente.value;
}
//Clientes
function createCliente() {
    var changecl = function change() {
        document.getElementById('WarningCL').textContent = "";
    };
    if (nombreCliente.value == "") {
        document.getElementById('WarningCL').textContent = "PORFAVOR LLENAR LOS CAMPOS";
        setTimeout(changecl, 3000);
        return;
    }
    else
        var IDcliente = steponupCL();
    var date = currentdate();
    var nomCL = nombreCliente.value;
    var estCL = estadoCliente.value;
    var Clientes1 = new Cliente(IDcliente - 1, nomCL, estCL, date);
    var button2CL = document.createElement("button");
    button2CL.innerText = "delete";
    button2CL.className = "btn_delete";
    button2CL.setAttribute('onclick', 'borrarFuncionCL(this)');
    var table = document.getElementById("MYTABLE2");
    var row = table.insertRow(3);
    table.appendChild(row);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell2.contentEditable = "true";
    cell2.setAttribute("onkeypress", "return (this.innerText.length <= 15)");
    cell2.setAttribute("onpaste", "return (this.innerText.length <= 15)");
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = String(Clientes1.ID);
    cell2.innerHTML = Clientes1.Nombre;
    cell3.innerHTML = String(Clientes1.Estado);
    cell4.innerHTML = Clientes1.FechaCreacion;
    cell5.append(button2CL);
    ClearCL();
    console.log(cell3.innerHTML);
    cell3.onclick = function () {
        var swap = cell3.innerHTML;
        if (swap == "Activo") {
            cell3.innerHTML = "Inactivo";
        }
        else {
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
};
