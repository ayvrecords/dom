var cajas = document.getElementsByTagName('div');
// var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primera');

// cajas[0] nos retorna la primera caja


// primeraCaja.textContent = 'Hola Mundo!';
primeraCaja.innerHTML = '<u>yurley</u>';

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 

// ----- Creando Nodos
	// 1.- Crear el elemento
	var caja = document.createElement('div');
	// 2.- Crear uno nodo de texto
	var contenido = document.createTextNode(' Mundo');
	// 3.- Añadir el nodo de texto al elemento
	caja.appendChild(contenido);
	// 4.- Agregar atributos a los caja
	caja.setAttribute('class', 'caja naranja');

	// 5.- Agregar el elemento al documento
	// var contenedor = document.getElementById('contenedor');
	contenedor.appendChild(caja);

	var caja2 = document.createElement('div');
	// 2.- Crear uno nodo de texto
	var contenido2 = document.createTextNode(' Mundo2');
	// 3.- Añadir el nodo de texto al elemento
	caja2.appendChild(contenido2);
	// 4.- Agregar atributos a los caja
	caja2.setAttribute('class', 'caja naranja');

	// 5.- Agregar el elemento al documento
	// var contenedor = document.getElementById('contenedor');
	contenedor.appendChild(caja2);

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 

// ----- Modificando la clase o id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

// ----- Conociendo el elemento padre
	var padre = cajas[0].parentNode;

// ----- Posicionar el elemento antes de otro seleccionado
	// padre.insertBefore(caja, primeraCaja);

// ----- Remplazando Nodos
	padre.replaceChild(caja, cajas[2]);

// ----- Eliminando Nodos
	padre.removeChild(cajas[3]);