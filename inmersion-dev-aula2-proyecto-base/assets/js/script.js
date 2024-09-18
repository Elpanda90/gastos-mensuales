let listaNombresGastos = [];
let listaValoresGastos = [];
//Creamos unas listas
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    //Agarramos el valor de los campos con el id
    console.log(nombreGasto);
    console.log(valorGasto);


    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    actualizarListaGastos();


    //Agregamos los elementos a el arreglo
}
function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => { 


        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        totalGastos += Number(valorGasto);
        console.log(totalGastos)

    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}//agregamos otra funcion que hace que actualice los campos y agrege las cosas a la lista, aqui mismo creamos un boton aqui mismo para eliminar, aparte espesificamos
// que solo se puede 2 decimales, luego hacemos el valor de total de gastos en numerico, y mandamos la lista
function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';

}//Aqui simplemente vaciamos los campos
function eliminarGasto(posicion){
   listaNombresGastos.splice(posicion,1); 
   listaNombresGastos.splice(posicion,1); 
   actualizarListaGastos();

}//Esta es la funcion para eliminar el elemento de la lista