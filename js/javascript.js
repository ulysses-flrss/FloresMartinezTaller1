let rdbButton = document.getElementById("tipoUsuario");
let docente = document.getElementById("doc");
let estudiante = document.getElementById("est");
let usuExt = document.getElementById("usuExt");
let select = document.getElementById("select");
let table = document.getElementById("table");


let numPedidos = 0;
let tipoUsu = [];
let tipoLib = [];
let fechaEnt = [];
let prestar = document.getElementById("prestar");
prestar.addEventListener("click", prestarLibro)
fechaEntrega();
function prestarLibro () {
    if (tipoUsuario() == "" || tipoLibro() == "" || fechaEntrega() == "undefined") {
        alert("No debe dejar ningun campo vacio")
    } else {
        tipoUsu[numPedidos] = tipoUsuario();
        tipoLib[numPedidos] = tipoLibro();
        fechaEnt[numPedidos] = fechaEntrega();
        numPedidos++;
        tabla();
    }
}


function tipoUsuario () {
    if (docente.checked) {
        return "Docente";
    } else if (estudiante.checked) {
        return "Estudiante";
    } else if (usuExt.checked) {
        return "Externo";
    }
}

function tipoLibro () {
    return select.options[select.selectedIndex].value
}

function fechaEntrega () {
    let hoy = new Date();
    let cantidadDeDias;
    
    switch (tipoLibro()) {
        case "Ciencias Básicas y Tecnología":
            switch (tipoUsuario()) {
                case "Docente":
                    cantidadDeDias = 6;
                    break;
            
                case "Estudiante":
                    cantidadDeDias = 3;
                    break;

                case "Externo":
                    cantidadDeDias = 0;
                    break;

                default:
                    break;
            }
            break;

        case "Tesis":
            switch (tipoUsuario()) {
                case "Docente":
                    cantidadDeDias = 30;
                    break;
            
                case "Estudiante":
                    cantidadDeDias = 15;
                    break;

                case "Externo":
                    cantidadDeDias = 0;
                    break;

                default:
                    break;
            }
            break;

        case "Obras Literarias":
            switch (tipoUsuario()) {
                case "Docente":
                    cantidadDeDias = 14;
                    break;
            
                case "Estudiante":
                    cantidadDeDias = 7;
                    break;

                case "Externo":
                    cantidadDeDias = 0;
                    break;

                default:
                    break;
            }
            break;

        case "Otros":
            switch (tipoUsuario()) {
                case "Docente":
                    cantidadDeDias = 4;
                    break;
            
                case "Estudiante":
                    cantidadDeDias = 2;
                    break;

                case "Externo":
                    cantidadDeDias = 0;
                    break;

                default:
                    break;
            }
            break;
    
        default:
            break;

            
        }
            let devolucion = 1000 * 60 * 60 * 24 * cantidadDeDias;
            let suma = hoy.getTime() + devolucion; //getTime devuelve milisegundos de esa fecha
            let fechaDevolucion = new Date(suma);
            return fechaDevolucion.toLocaleDateString();
}


function tabla() {
    table.innerHTML = "<tr> <th>Tipo de Libro</th> <th>Tipo de Usuario</th> <th>Fecha de Devolución</th> </tr>";
    for (let i = 0; i < numPedidos; i++) {
        table.innerHTML += "<tr> <td>" + tipoLib[i] + "</td> <td>" + tipoUsu[i] + "</td> <td>" + fechaEnt[i] + "</td> </tr>"
    }
}   



